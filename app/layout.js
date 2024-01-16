import { Inter } from 'next/font/google'
import './globals.scss'
import StyledComponentsRegistry from './lib/registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cappadocia-Homepage',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
