import Head from 'next/head'
import './globals.css'
import type { Metadata } from 'next'
import { Header } from './Header'
import Footer from './Footer'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className='container mx-auto bg-slate-700 text-slate-50'>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}
