import { useTheme } from 'next-themes'
import { MagnifyingGlass, Circle } from 'phosphor-react'
import { Card } from '../components/Card'
import { Input } from '../components/input/'
import { Switch } from '../components/Switch'

export default function Home() {
	const { theme, setTheme } = useTheme()

	function about(event: Event) {
		event.preventDefault()
		console.log('Card button clicked')
	}

	return (
		<>
			<div className='flex flex-col pb-6'>
				<nav className='flex justify-center'>
					<Switch
						onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
					/>
				</nav>

				<div className='flex justify-center'>
					<Input.Root>
						<Input.Icon>
							<Circle weight='fill' color='#5B1F0C' className=' w-3 h-3 ml-2' />
						</Input.Icon>
						<Input.Input
							type='text'
							placeholder='find your coffee'
							className='bg-transparent text-gray-500 rounded focus:outline-none outline-none dark:bg-transparent'
						/>

						<Input.Icon>
							<MagnifyingGlass
								color='white'
								className='flex relative justify-center items-center w-11 h-10 py-2 bg-brown-500 rounded-r-[4px]'
							/>
						</Input.Icon>
					</Input.Root>
				</div>
			</div>

			<main className='grid grid-cols-2'>
				<div className='flex relative justify-center items-center '>
					<Card
						title='Cappucino'
						type='espresso'
						onClick={about}
						link='https://picsum.photos/200/300/?blur=2'
					/>
				</div>
			</main>
		</>
	)
}
