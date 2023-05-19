import Link from 'next/link'
import { ChevronLeft, Camera } from 'lucide-react'

export default function newMemorie() {
	return (
		<div className="flex flex-col flex-1 gap-4">
			<Link href="/" className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100">
				<ChevronLeft className="w-4 h-4" />
				Voltar à timeline
			</Link>

			<form className="flex flex-col flex-1 gap-2">
				<div className="flex items-center gap-4">
					<label htmlFor="media" className="flex items-center gap-1.5 cursor-pointer text-sm text-gray-200 hover:text-gray-100">
						<Camera className="w-4 h-4" />
						Anexar mídia
					</label>
					<input type="file" id="media" className="invisible h-0 w-0" />

					<label htmlFor="isPublic" className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100">
						<input type="checkbox" name="isPublic" id="isPublic" value="true" className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500" />
						Tornar memória pública
					</label>
				</div>

				<textarea 
					name="content" 
					spellCheck={false} 
					className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0" 
					placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre." 
				/>
			</form>
		</div>
	)
}