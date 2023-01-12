import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'

import { AuthProvider } from '@contexts/AuthContext'
import { ToastProvider } from '@ordo-realitas/react'
import { queryClient } from '@services/queryClient'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ToastProvider>
    </QueryClientProvider>
  )
}
