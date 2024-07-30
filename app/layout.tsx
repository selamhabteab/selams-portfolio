import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header'
//notes: root of app located in layout file.
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Selam Habteab | Portfolio",
  description: 'Selam Habteab is a software developer with four years of experience.',
  generator: 'Next.js',
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
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
        <div className="bg-red-600 absolute top-[-6rem] -z-10 -right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="bg-orange-300 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] 1g:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  )
}
