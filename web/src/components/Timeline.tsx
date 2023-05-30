'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import classNames from 'classnames'

interface Memory {
	id: string,
	coverUrl: string,
	excerpt: string,
	createdAt: string
}


interface TimelineProps {
	myMemories: Memory[],
	memoriesPublicData: Memory[]
}

export function Timeline({ myMemories, memoriesPublicData }: TimelineProps) {
	const [isMyMemories, setIsMyMemories] = useState(true)

	function toggleToMyMemories() {
		setIsMyMemories(true)
	}

	function toggleToMemoriesPublic() {
		setIsMyMemories(false)
	}

	return (
		<div className="flex flex-col gap-10 p-8 ">
			<div className="flex flex-col justify-center gap-2 mt-3 md:flex-row">
				<button type="button" className={classNames("border-[2px] rounded border-gray-700 px-4 py-2 hover:bg-gray-700 transition-colors", {
					"bg-transparent": !isMyMemories,
					"bg-gray-700": isMyMemories
				})} onClick={() => toggleToMyMemories()}>Ver minhas memórias</button>
				<button type="button" className={classNames("border-[2px] rounded border-gray-700 px-4 py-2 hover:bg-gray-700 transition-colors", {
					"bg-transparent": isMyMemories,
					"bg-gray-700": !isMyMemories
				})} onClick={() => toggleToMemoriesPublic()}>Ver memórias públicas</button>
			</div>
			{ isMyMemories && myMemories.map((memory) => {
				return (
					<div key={memory.id} className="space-y-4">
						<time className="flex items-center gap-2 text-sm text-gray-100 -ml-8 before:h-px before:w-5 before:bg-gray-50">
							{dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
						</time>
						<img src={memory.coverUrl} alt="" className="w-full aspect-video object-cover rounded-lg" />
						<p className="text-lg leading-relaxed text-gray-100">{memory.excerpt}</p>
						<Link href={`/memories/private/${memory.id}`} className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100">
							Ler mais
							<ArrowRight className="w-4 h-4" />
						</Link>
					</div>
				)
			})}
			{ !isMyMemories && memoriesPublicData.map((memory) => {
					return (	
						<div key={memory.id} className="space-y-4">
							<time className="flex items-center gap-2 text-sm text-gray-100 -ml-8 before:h-px before:w-5 before:bg-gray-50">
								{dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
							</time>
							<img src={memory.coverUrl} alt="" className="w-full aspect-video object-cover rounded-lg" />
							<p className="text-lg leading-relaxed text-gray-100">{memory.excerpt}</p>
							<Link href={`/memories/public/${memory.id}`} className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100">
								Ler mais
								<ArrowRight className="w-4 h-4" />
							</Link>
						</div>
						
					)
				})
			}
		</div>
	)
}