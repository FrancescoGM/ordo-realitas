import axios, { AxiosError } from 'axios'

type AxiosErrorData = {
  message: string
}

export function isAxiosError<E = AxiosErrorData>(
  error: unknown
): error is AxiosError<E> {
  return axios.isAxiosError(error)
}
