import './globals.css'
import { ReactNode } from 'react'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'
import { cookies } from 'next/headers'

import { Hero } from '../components/Hero'
import { SignIn } from '../components/SignIn'
import { Profile } from '../components/Profile'

const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' })
const BaiJamjuree = Bai_Jamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai_jamjuree' })

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma capsula do tempo construída com React, Next.js, Tailwindcss e Typescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
 	const isAuthenticated = cookies().has('token')

	return (
	    <html lang="pt-br">
	      <body className={`${roboto.variable} ${BaiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
	      	<main className="grid grid-cols-1 h-1/2 md:grid-cols-2 md:min-h-screen">
				<div className="flex flex-col gap-10 items-start justify-between px-8 py-8 relative overflow-hidden border-b border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover lg:px-28 lg:py-16 lg:gap-0 md:border-r md:border-white/10">
					<div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full" />
					<div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />

					{ isAuthenticated ? <Profile /> : <SignIn />}

					<Hero />

					<div className="text-sm leading-relaxed text-gray-200">Feito com carinho no NLW da Rocketseat</div>
				</div>
				<div className="flex max-h-screen flex-col bg-[url(../assets/bg-stars.svg)] bg-cover md:overflow-y-scroll">
					{children}
				</div>
			</main>	
	      </body>
	    </html>
	)
}
