import './globals.css'
import { ReactNode } from 'react'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'

const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' })
const BaiJamjuree = Bai_Jamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai_jamjuree' })

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma capsula do tempo construída com React, Next.js, Tailwindcss e Typescript',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${BaiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}
