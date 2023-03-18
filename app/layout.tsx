import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Hugo Gonzaga',
  description: 'Hugo Gonzaga',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link href='/'>
            <h1>Hugo Gonzaga</h1>
          </Link>
        </header>
        {children}
        </body>
    </html>
  )
}
