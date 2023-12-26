import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme-provider"
import { dark } from '@clerk/themes'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CodeStream | Because coding alone is so 1990!',
  description: 'Welcome to CodeStream, where we transform solitary coders into social butterflies! We believe that coding should be a team sport, and with our platform, it’s never been easier (or more fun) to collaborate. Say goodbye to the days of scratching your head over a piece of code, and say hello to instant, seamless collaboration. With CodeStream, you’ll be laughing all the way to your next successful project deployment. Join us, and let’s make coding the new party!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
    appearance = {{
      baseTheme: dark
    }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            forcedTheme='dark'
            storageKey='code-stream-theme'
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
