import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Docs Viewer - Browse API Documentation',
  description: 'Browse and view API documentation in one place',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="antialiased">{children}</body></html>
}
