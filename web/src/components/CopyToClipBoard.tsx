'use client'

import { useState } from 'react'
import { Link as Link1, CheckCircle } from 'lucide-react'

interface CopyToClipBoardProps {
	memorieId: string
} 

export function CopyToClipBoard({ memorieId }: CopyToClipBoardProps) {
	const [isClipBoardClick, setIsClipBoardClick] = useState(false)

	function copyToClipBoard() {
		const mainUrl = window.location.origin
		navigator.clipboard.writeText(`${mainUrl}/memories/public/${memorieId}`)
		setIsClipBoardClick(true)

		setTimeout(() => setIsClipBoardClick(false), 3000);
	}

	return (
		<button 
			type="button" 
			className="flex items-center gap-1 rounded-full cursor-pointer bg-zinc-700 px-5 py-3 font-alt text-sm uppercase leading-none hover:bg-zinc-600 transition-colors"
			onClick={() => copyToClipBoard()}
		>
			{ isClipBoardClick ? <CheckCircle className="w-5 h-5 text-green-400" /> : <Link1 className="w-5 h-5"></Link1>}
			<p>Copiar link para compartilhar a memória</p>
		</button>
	)
}
