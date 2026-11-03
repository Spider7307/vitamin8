import Link from 'next/link'
// app/layout.js - this wraps every page in your app
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/login">Login</Link>
        </nav>
        <footer>This footer appears on EVERY page</footer>
        {children}
      </body>
    </html>
  )
}