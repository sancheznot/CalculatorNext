import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cool calculator',
  description: 'Cool calculator 2023',
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-full">{children}</body>
    </html>
  )
}
