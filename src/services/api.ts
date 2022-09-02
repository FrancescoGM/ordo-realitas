import { NookiesContext } from '@interfaces/Nookies'
import axios, { AxiosError, AxiosInstance } from 'axios'
import { parseCookies } from 'nookies'

import { setCookies, signOut } from '../contexts/AuthContext'
import { AuthTokenError } from './errors/AuthTokenError'

type FailedRequest = {
  onSuccess: (token: string) => void
  onFailure: (error: AxiosError) => void
}

let cookies = parseCookies()
let isRefreshing = false
let failedRequestQueue: FailedRequest[] = []

export function setupAPI(ctx: NookiesContext = undefined): AxiosInstance {
  const isBrowser = typeof window !== 'undefined'
  cookies = parseCookies(ctx)

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
    headers: {
      'x-access-token': `Bearer ${cookies['@ordo_realitas:x-access-token']}`,
    },
  })

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error: AxiosError) => {
      if (
        error.response?.status &&
        [403, 401].includes(error.response?.status)
      ) {
        if (error.response?.data.name === 'AccessDeniedError') {
          cookies = parseCookies()

          const { '@ordo_realitas:refresh_token': refresh_token } = cookies
          const originalConfig = error.config

          if (!isRefreshing) {
            isRefreshing = true

            api
              .post('/sessions/refresh', { refresh_token })
              .then(({ data }) => {
                const { token } = data
                setCookies(ctx, { token })

                failedRequestQueue.forEach((request) =>
                  request.onSuccess(token),
                )
                failedRequestQueue = []
              })
              .catch((error) => {
                failedRequestQueue.forEach((request) =>
                  request.onFailure(error),
                )
                failedRequestQueue = []

                signOut(ctx, { redirect: isBrowser })
              })
              .finally(() => {
                isRefreshing = false
              })
          }

          return new Promise((resolve, reject) => {
            failedRequestQueue.push({
              onSuccess: (token: string) => {
                if (originalConfig && originalConfig.headers) {
                  originalConfig.headers['x-access-token'] = token
                }
                resolve(api(originalConfig))
              },
              onFailure: (err: AxiosError) => {
                reject(err)
              },
            })
          })
        } else {
          signOut(ctx, { redirect: isBrowser })

          if (!isBrowser) {
            return Promise.reject(new AuthTokenError())
          }
        }
      }

      return Promise.reject(error)
    },
  )

  return api
}

export const api = setupAPI()
