import './globals.css'
import Link from 'next/link'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <div className="flex gap-4 p-4">
          <Link className="hover:bg-slate-300 transition" href="/" prefetch={true}>
            Home
          </Link>
          <Link className="hover:bg-slate-300 transition" href="/dashboard">
            Dashboard
          </Link>
        </div>
        <main className="flex flex-col items-center justify-top p-12">{children}</main>
      </body>
    </html>
  )
}
