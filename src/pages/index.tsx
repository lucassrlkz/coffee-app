import { Input } from "../components/input/input"
import { useTheme } from "next-themes"
import { MagnifyingGlass, Circle } from "phosphor-react"
import { Switch } from "../components/switch/switch"

export default function Home() {
	const { theme, setTheme } = useTheme()

	return (
		<>
			<div className="flex flex-col h-screen w-screen dark: bg-dark-zinc">
				<span className="flex justify-center">
					<Switch
						children={`${theme === "light" ? "light" : "dark"}`}
						onClick={() => setTheme(theme === "light" ? "dark" : "light")}
					/>
				</span>

				<div className="flex justify-center">
					<Input.Root>
						<Input.Icon>
							<Circle
								weight="fill"
								color="#5B1F0C"
								className=" w-3 h-3 ml-2"
							/>
						</Input.Icon>
						<Input.Input
							type="text"
							placeholder="find your coffee"
							className="bg-transparent text-black dark:text-black rounded focus:outline-none outline-none dark:bg-transparent"
						/>

						<Input.Icon>
							<MagnifyingGlass
								color="white"
								className="flex relative justify-center items-center w-11 h-10 py-2 bg-brown-500 rounded-r-[4px]"
							/>
						</Input.Icon>
					</Input.Root>
				</div>
			</div>
		</>
	)
}
