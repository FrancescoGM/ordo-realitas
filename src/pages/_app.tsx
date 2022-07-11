import type { AppProps } from 'next/app'

import { AuthProvider } from '@contexts/AuthContext'
import { ToastProvider } from '@contexts/ToastContext'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ToastProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ToastProvider>
  )
}
