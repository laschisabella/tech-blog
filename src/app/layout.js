import './globals.css'
import { Inter } from 'next/font/google'

import AuthProvider from '@/components/AuthProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "laschisa's tech blog",
  description: 'Demo website. For more, please visit http://isabella-laschi.vercel.app',
}

const bodyClassNames = inter.className + ' max-w-screen-xl mx-auto bg-violet-100 flex flex-col justify-between min-h-screen px-10'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyClassNames}>
      <AuthProvider>
        <Header />
        {children}
        <Footer/>
      </AuthProvider>
      </body>
    </html>
  )
}
