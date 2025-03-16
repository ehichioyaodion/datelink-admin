import './globals.css'

export const metadata = {
  title: 'DateLink Admin',
  description: 'Admin panel for DateLink',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}