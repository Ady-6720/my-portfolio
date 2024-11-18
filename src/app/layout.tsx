import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Modern Portfolio',
  description: 'A modern portfolio built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased text-[#003135]
         min-h-screen overflow-x-hidden selection:bg-[#0FA4AF] selection:text-white`}
      >
        {children}
      </body>
    </html>
  )
}