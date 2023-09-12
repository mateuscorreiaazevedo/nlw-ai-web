import { ThemeProvider } from '@/modules/core'
import { Montserrat } from 'next/font/google'
import { Button, Separator } from '@/components/ui'
import '../assets/styles/globals.css'
import { Github } from 'lucide-react'
import { ReactNode } from 'react'
import Link from 'next/link'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  fallback: ['sans serif']
})

export const metadata = {
  title: 'upload.ai',
  description:
    'development of the application on NLW AI by @rocketseat. Powered by Mateus Azevedo'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.variable} font-montserrat flex min-h-screen w-full flex-col bg-neutral-50 text-zinc-950 dark:bg-zinc-950 dark:text-white`}
      >
        <ThemeProvider>
          <header className="sticky top-0 flex items-center justify-between border-b border-b-zinc-800 px-6 py-3 dark:bg-zinc-950">
            <Link href="/">
              <h1 className="text-xl font-bold">upload.ai</h1>
            </Link>
            <nav className="flex items-center gap-3">
              <span className="text-sm text-zinc-400">
                Desenvolvido com ❤️ no NLW da Rocketseat
              </span>
              <Separator orientation="vertical" className="h-6" />
              <Button color="outline" size="sm">
                <Github size={16} />
                Github
              </Button>
            </nav>
          </header>
          <main className="flex flex-1 gap-6 p-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
