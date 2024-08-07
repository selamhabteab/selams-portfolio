import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from './components/footer'
import ThemeSwitch from './components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Selam Habteab | Portfolio",
  description: 'Selam Habteab is a software developer with four years of experience.',
  generator: 'Next.ejs',
  keywords: ['consultant', 'contractor', 'software developer', 'black', 'React'],
  creator: 'Selam Habteab',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-red-600 absolute top-[-6rem] -z-10 -right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-orange-300 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] 1g:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-purple-600"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children} 
            <Footer />
            <Toaster position="bottom-center" />
          <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
