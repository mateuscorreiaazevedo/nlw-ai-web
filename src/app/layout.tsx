import { Montserrat } from 'next/font/google'
import '../assets/styles/globals.css'
import { ReactNode } from 'react'
import { ThemeProvider } from '@/modules/core'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  fallback: ['sans serif']
})

export const metadata = {
  title: '@mateuscorreiaazevedo',
  description: 'My boilerplate using Next.js 13. Powered by Mateus Azevedo'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.variable} min-h-screen w-full bg-neutral-50 font-montserrat text-zinc-950 dark:bg-zinc-900 dark:text-white`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
