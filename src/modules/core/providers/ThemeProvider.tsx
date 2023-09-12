'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <NextThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </NextThemeProvider>
  )
}
