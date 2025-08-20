import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Demo',
  description: 'Demo application using Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='h-screen w-full bg-[linear-gradient(90deg,#D1DBEB_7%,#C7C7ED_79%,#E3DAF0_100%)] '>
        <>{children}</>
      </body>
    </html>
  )
}
