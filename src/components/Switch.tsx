import React from 'react'

export interface ISwitchProps extends React.HTMLAttributes<HTMLInputElement> {
	onClick: (event: any) => void
}

export function Switch({ onClick }: ISwitchProps): JSX.Element {
	return (
		<label
			htmlFor='default-toggle'
			className='inline-flex relative items-center mb-4 cursor-pointer'
		>
			<input
				type='checkbox'
				value=''
				id='default-toggle'
				className='sr-only peer'
				onClick={onClick}
			/>

			<div className="w-11 h-6 rounded-full peer peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-white peer-checked:after:translate-x-full peer-checked:after:border-brown-500 after:content-[''] after:absolute after:top-0.5 after:left-[2px]  after:bg-brown-500 after:border-brown-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-brown-300 peer-checked:bg-gray-200"></div>
		</label>
	)
}
