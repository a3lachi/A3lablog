import './globals.css'

export const metadata = {
  title: 'A3lablog',
  description: 'Stretching words..',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
