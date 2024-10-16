import tailwindcssAnimate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'montserrat': ["var(--font-montserrat)"]
			},
			colors: {
				'regal-black': '#171717',
				'regal-white': '#FFFFFF',
				'regal-green': '#D2F999',
				'regal-gray': '#E9E9E9'
			},
		}
	},
	plugins: [tailwindcssAnimate],
};
export default config;
