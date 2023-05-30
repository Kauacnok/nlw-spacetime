import Link from 'next/link'
import { cookies } from 'next/headers'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import classNames from 'classnames'
import { ArrowRight } from 'lucide-react'

import { EmptyMemories } from '../components/EmptyMemories'
import { Timeline } from '../components/Timeline'
import { api } from '../lib/api'

dayjs.locale(ptBr)

interface Memory {
	id: string,
	coverUrl: string,
	excerpt: string,
	createdAt: string
}

export default async function Home() {
	const isAuthenticated = cookies().has('token')

	const responseMemoriesPublic = await api.get('/memories/public')

	const memoriesPublic: Memory[] = responseMemoriesPublic.data

	if (!isAuthenticated) {
		return <EmptyMemories message="Você ainda não registrou nenhuma lembrança, comece a " path="/memories/new" messageForPath="criar agora!" isHomePage={true} memoriesPublicData={memoriesPublic} />
	}

	const token = cookies().get('token')?.value
	
	const response = await api.get('/memories', {
		headers: {
			Authorization: `bearer ${token}`
		}
	})

	const memories: Memory[] = response.data

	if (memories.length === 0) {
		return <EmptyMemories message="Você ainda não registrou nenhuma lembrança, comece a " path="/memories/new" messageForPath="criar agora!" isHomePage={true} memoriesPublicData={memoriesPublic} />
	}

	return (	
		<Timeline myMemories={memories} memoriesPublicData={memoriesPublic} />
	)
}
