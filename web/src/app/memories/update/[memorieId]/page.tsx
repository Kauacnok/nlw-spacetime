import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { cookies } from 'next/headers'

import { api } from '../../../../lib/api'
import { UpdateMemoryForm } from '../../../../components/UpdateMemoryForm'

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

export default async function updateMemorie({ params }: memorieIDProps) {

	const token = cookies().get('token')?.value

	const response = await api.get(`/memories/${params.memorieId}`, {
		headers: {
			Authorization: `bearer ${token}`
		}
	})

	const memory: Memory = response.data

	return (
		<div className="flex flex-col flex-1 gap-4 p-4 md:p-16">
			<Link href="/" className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100">
				<ChevronLeft className="w-4 h-4" />
				Voltar à timeline
			</Link>

			<UpdateMemoryForm memorieId={params.memorieId} memory={memory} />
		</div>
	)
}