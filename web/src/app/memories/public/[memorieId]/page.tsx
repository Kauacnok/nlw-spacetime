import Link from 'next/link'
import { cookies } from 'next/headers'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'

import { api } from '../../../../lib/api'
import { EmptyMemories } from '../../../../components/EmptyMemories'

dayjs.locale(ptBr)

interface memorieIDProps {
	params: {
		memorieId: string
	}
}

interface Memory {
	id: string,
	userId: string,
	coverUrl: string,
	content: string,
	createdAt: string,
	isPublic: boolean
}

interface User {
	id: string,
	githubId: string,
	name: string,
	login: string,
	avatarUrl: string,
	memories: Memory[]
}

export default async function MemorieId({ params }: memorieIDProps) {
	const response = await api.get(`/memories/public/${params.memorieId}`)

	if (!response) {
		return <EmptyMemories message="O autor desta memória não deixou está memória como pública, " path="/" messageForPath="voltar para a página inicial" />
	}

	const memory: Memory = response.data

	if (memory.isPublic === false) {
		return <EmptyMemories message="O autor desta memória não deixou está memória como pública, " path="/" messageForPath="voltar para a página inicial" />
	}

	const responseUser = await api.get(`/user/${memory.userId}`)

	const user: User = responseUser.data

	return (
		<div className="flex flex-col gap-10 p-8 ">
			<div className="space-y-4">
				<time className="flex items-center gap-2 text-sm text-gray-100 -ml-8 before:h-px before:w-5 before:bg-gray-50">
					{dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
				</time>
				<Link href="/" className="flex items-center gap-2 text-sm underline text-gray-200 hover:text-gray-100">Voltar para a página inicial</Link>
				<img src={memory.coverUrl} alt="" className="w-full aspect-video object-cover rounded-lg" />
				<div className="flex items-center gap-3 text-left">
					<img src={user.avatarUrl} className="w-10 h-10 rounded-full" />
					<div>
						<h1 className="text-sm leading-snug text-gray-50">{user.name} <a href={`https://github.com/${user.login}`} target="_blank" className="text-gray-100 underline">(@<span className="capitalize">{user.login}</span>)</a></h1>
						<p className="text-sm leading-snug">Autor da memória</p>
					</div>
				</div>
				<p className="text-lg leading-relaxed text-gray-100">{memory.content}</p>
			</div>
		</div>
	)
}
