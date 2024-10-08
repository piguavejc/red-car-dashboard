import './globals.css'

import Image from 'next/image'
import { Kanit } from 'next/font/google'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/provider/theme'
import { Toaster } from 'react-hot-toast'
import { ViewTransitions } from 'next-view-transitions'

export const metadata: Metadata = {
  title: 'Salud & Vida',
  description:
    'Salud & Vida es una plataforma dedicada a proporcionar información y recursos sobre salud y bienestar. Nuestro objetivo es ayudar a las personas a llevar una vida más saludable y feliz a través de la medicina natural.'
}

const kanit = Kanit({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-kanit'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <ViewTransitions>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
            <div className="fixed top-0 z-[-1] flex h-screen w-full items-center justify-center bg-card">
              <Image
                src={'/login.svg'}
                alt={'login'}
                width={0}
                height={0}
                sizes="100%"
                className="w-full max-w-4xl object-cover opacity-40"
              />
            </div>
          </ThemeProvider>
          <Toaster position="bottom-right" />
        </ViewTransitions>
      </body>
    </html>
  )
}
