import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import {
	InputIconProps,
	InputRootProps,
	InputInputProps,
} from '../../interfaces/interfaceInput'

export function InputRoot(props: InputRootProps) {
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
