import { InputHTMLAttributes, ReactNode } from "react"

export interface InputRootProps {
	children: ReactNode
}

export interface InputIconProps extends React.HTMLProps<HTMLInputElement> {
	children: ReactNode
}

export interface InputInputProps
	extends InputHTMLAttributes<HTMLInputElement> {}
