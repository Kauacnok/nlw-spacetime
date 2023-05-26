import Link from 'next/link'
import { cookies } from 'next/headers'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'

import { api } from '../../../lib/api'
import { CopyToClipBoard } from '../../../components/CopyToClipBoard'

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

export default async function MemorieId({ params }: memorieIDProps) {
	const token = cookies().get('token')?.value

	const response = await api.get(`/memories/${params.memorieId}`, {
		headers: {
			Authorization: `bearer ${token}`
		}
	})

	const memory: Memory = response.data

	return (
		<div className="flex flex-col gap-10 p-8 ">
			<div className="space-y-4">
				<time className="flex items-center gap-2 text-sm text-gray-100 -ml-8 before:h-px before:w-5 before:bg-gray-50">
					{dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
				</time>
				<Link href="/" className="flex items-center gap-2 text-sm underline text-gray-200 hover:text-gray-100">Voltar para a página inicial</Link>
				<img src={memory.coverUrl} alt="" className="w-full aspect-video object-cover rounded-lg" />
				<p className="text-lg leading-relaxed text-gray-100">{memory.content}</p>
				<div className="flex flex-col items-center gap-2 md:flex-row">
					<Link href={`/memories/update/${params.memorieId}`} className="inline-block rounded-full self-end bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600 transition-colors md:self-start">Editar memória</Link>
					<CopyToClipBoard memorieId={params.memorieId} />
				</div>
			</div>
		</div>
	)
}