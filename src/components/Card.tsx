import React from 'react'
import { MagnifyingGlassPlus } from 'phosphor-react'

interface CardProps extends React.HTMLAttributes<HTMLButtonElement> {
	title: string
	type: string
	link: string
	onClick: (event: any) => void
}

export function Card({ title, type, link, onClick }: CardProps) {
	return (
		<div className='flex flex-col relative justify-center items-center bg-beige rounded-t-md rounded-b'>
			<img src={link} className='w-fit rounded-t' alt={'coffe photo'} />

			<div className='flex flex-col relative items-center justify-center mt-2'>
				<span className='font-medium text-base text-brown-500'>{title}</span>
				<span className='font-light text-xs text-gray-500 mt-2'>{type}</span>
			</div>

			<span className='relative self-end p-2'>
				<button
					className=' h-10 w-10 flex items-center justify-center bg-brown-500 rounded-full'
					onClick={onClick}
				>
					<span className='flex relative'>
						<MagnifyingGlassPlus height={24} width={24} color='white' />
					</span>
				</button>
			</span>
		</div>
	)
}
