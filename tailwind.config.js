/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class", '[data-mode="dark"]'],
	content: ["./src/**/*.{ts,tsx}", "/src/pages/**/*.tsx"],
	theme: {
		colors: {
			transparent: "transparent",
			white: "#FFFFFF",
			black: "#000000",
			beige: "#FFFDED",
			gray: {
				100: "#EBEBEB",
				400: "#B4B4B4",
				500: "#2F2E2E",
			},
			brown: {
				200: "rgba(91, 31, 12, 0.25)",
				300: "rgba(91, 31, 12, 0.5)",
				500: "#5B1F0C",
			},
			dark: {
				zinc: "#18181B",
			},
		},
		fontFamily: {},
		extend: {},
	},
	plugins: [],
}
