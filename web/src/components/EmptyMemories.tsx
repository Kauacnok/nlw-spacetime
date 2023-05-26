interface EmptyMemoriesProps {
	message: string,
	path: string,
	messageForPath: string
}


export function EmptyMemories({ message, path, messageForPath }: EmptyMemoriesProps) {
	return (
		<div className="flex flex-1 items-center justify-center p-16">
			<p className="text-center leading-relaxed w-[360px]">{message}<a href={path} className="underline hover:text-gray-50">{messageForPath}</a></p>	
		</div>
	)
}
