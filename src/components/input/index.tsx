import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react'

// interfaces
export interface InputRootProps {
	children: ReactNode
}

export interface InputIconProps extends React.HTMLProps<HTMLInputElement> {
	children: ReactNode
}

export interface InputInputProps
	extends InputHTMLAttributes<HTMLInputElement> {}
//interfaces

export function InputRoot(props: InputRootProps): JSX.Element {
	return (
		<div className='w-[328px] flex flex-row shadow bg-white items-center justify-between outline-none h-auto rounded rounded-r-md'>
			{props.children}
		</div>
	)
}

export function InputIcon(props: InputIconProps) {
	return <Slot>{props.children}</Slot>
}

export function InputInput(props: InputInputProps) {
	return (
		<>
			<input
				className=' outline outline-0 outline-offset-0 focus:outline-none text-xs placeholder:text-gray-200'
				{...props}
			/>
		</>
	)
}

InputRoot.displayName = 'Input.Root'
InputIcon.displayName = 'Input.Icon'
InputInput.displayName = 'Input.input'

export const Input = {
	Root: InputRoot,
	Input: InputInput,
	Icon: InputIcon,
}
