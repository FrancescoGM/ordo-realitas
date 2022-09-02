import Router from 'next/router'
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

import axios from 'axios'
import { destroyCookie, parseCookies, setCookie } from 'nookies'

import { useToast } from '../hooks/useToast'
import { NookiesContext } from '../interfaces/Nookies'
import { api } from '../services/api'

export type User = {
  email: string
  name: string
  avatar_url: string | null
}

type UserResponse = {
  refresh_token: string
  token: string
  user: User
}

type SignInCredentials = {
  email: string
  password: string
}

export type AuthContextData = {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean

  onSignIn(credentials: SignInCredentials): Promise<void>
  onSignInWithGoogle(id_token: string): Promise<void>
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

type SetCookiesData = {
  refresh_token?: string
  token?: string
}

export function setCookies(
  ctx: NookiesContext,
  { token, refresh_token }: SetCookiesData,
): void {
  if (token) {
    api.defaults.headers.common['x-access-token'] = `Bearer ${token}`
    setCookie(ctx, '@ordo_realitas:x-access-token', token, {
      maxAge: MAX_AGE_IN_SECONDS,
      path: '/',
    })
  }

  if (refresh_token) {
    setCookie(ctx, '@ordo_realitas:refresh_token', refresh_token, {
      maxAge: MAX_AGE_IN_SECONDS,
      path: '/',
    })
  }
}

type SignOutOptions = {
  redirect?: boolean
}

export function signOut(
  ctx: NookiesContext,
  { redirect = true }: SignOutOptions = {},
): void {
  delete api.defaults.headers.common['x-access-token']
  destroyCookie(ctx, '@ordo_realitas:x-access-token')
  destroyCookie(ctx, '@ordo_realitas:refresh_token')

  if (redirect) {
    Router.push('/signin')
  }
}

const MAX_AGE_IN_SECONDS = 30 * 24 * 60 * 60 // 30 days
const cookies = parseCookies()

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const isAuthenticated = !!user

  const toast = useToast()

  useEffect(() => {
    const { '@ordo_realitas:refresh_token': refresh_token } = cookies
    if (refresh_token) {
      api
        .get<Pick<UserResponse, 'user'>>('/sessions/refresh/user')
        .then(({ data }) => setUser(data.user))
        .catch(() => {
          signOut(undefined)
          Router.push('/dashboard')
          toast({
            title: 'Sessão expirada',
            description: 'Sua sessão expirou, faça login novamente.',
            status: 'error',
          })
        })
    }
  }, [toast])

  const handleSignIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      setIsLoading(true)

      try {
        const response = await api.post<UserResponse>('/sessions', {
          email,
          password,
        })

        const { user, refresh_token, token } = response.data

        setCookies(undefined, { token, refresh_token })

        setUser(user)

        Router.push('/dashboard')
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast({
            title: 'Falha no login',
            description:
              error.response?.data.error || 'Não foi possível realizar o login',
            status: 'error',
          })
        } else {
          return Promise.reject(error)
        }
      } finally {
        setIsLoading(false)
      }
    },
    [toast],
  )

  const handleSignInWithGoogle = useCallback(
    async (id_token: string) => {
      setIsLoading(true)

      try {
        const response = await api.post<UserResponse>('/sessions/google', {
          id_token,
        })

        const { user, refresh_token, token } = response.data

        setCookies(undefined, { token, refresh_token })

        setUser(user)

        Router.push('/dashboard')
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast({
            title: 'Falha no login com Google',
            description:
              error.response?.data.error ||
              'Não foi possível realizar o login com o Google',
            status: 'error',
          })
        } else {
          return Promise.reject(error)
        }
      } finally {
        setIsLoading(false)
      }
    },
    [toast],
  )

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        onSignIn: handleSignIn,
        onSignInWithGoogle: handleSignInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
