import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

import { NewMemoryForm } from '../../../components/NewMemoryForm'

export default function newMemorie() {
	return (
		<div className="flex flex-col flex-1 gap-4 p-16">
			<Link href="/" className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100">
				<ChevronLeft className="w-4 h-4" />
				Voltar à timeline
			</Link>

			<NewMemoryForm />
		</div>
	)
}