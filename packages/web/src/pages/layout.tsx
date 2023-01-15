import { ReactNode } from 'react'

import { Inter, Poppins } from '@next/font/google'

const inter = Inter({ weight: ['400', '500', '700'] })
const poppins = Poppins({ weight: ['400', '500', '700'] })

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className + ' ' + poppins.className}>
      <body>{children}</body>
    </html>
  )
}
