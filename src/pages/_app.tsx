import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import { AuthProvider } from '@contexts/AuthContext'
import { ToastProvider } from '@contexts/ToastContext'
import { darkTheme } from '@stitches'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: 'light',
        dark: darkTheme.className,
      }}
    >
      <ToastProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  )
}
