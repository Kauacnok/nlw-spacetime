import { cookies } from 'next/headers'

import { Hero } from '../components/Hero'
import { SignIn } from '../components/SignIn'
import { Profile } from '../components/Profile'
import { EmptyMemories } from '../components/EmptyMemories'

export default function Home() {

	const isAuthenticated = cookies().has('token')

	return (
		<main className="grid grid-cols-2 min-h-screen">
			<div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
				<div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full" />
				<div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />

				{ isAuthenticated ? <Profile /> : <SignIn />}

				<Hero />

				<div className="text-sm leading-relaxed text-gray-200">Feito com carinho no NLW da Rocketseat</div>
			</div>
			<div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
				<EmptyMemories />
			</div>
		</main>	
	)
}
