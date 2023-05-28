'use client'

import { ChangeEvent, useState } from 'react'

interface MediaPickerProps {
	previewInitialValue?: string,
	setIsFileSelected?: Function
}

export function MediaPicker({ previewInitialValue, setIsFileSelected }: MediaPickerProps) {
	const [preview, setPreview] = useState<string | null>(previewInitialValue || null)

	function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
		const { files } = event.target

		if (!files) {
			return
		}

		const previewUrl = URL.createObjectURL(files[0])
		if (setIsFileSelected) {
			setIsFileSelected(true)
		}

		setPreview(previewUrl)
	}

	return (
		<>
			<input 
				type="file" 
				id="media"
				name="coverUrl"
				accept="image/*" 
				className="invisible h-0 w-0" 
				onChange={onFileSelected}
			/>

			{preview && <img src={preview} alt="" className="w-full aspect-video rounded-lg object-cover" />}
		</>
	)
}