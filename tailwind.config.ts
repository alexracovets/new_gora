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
		screens: {
			'mobile': '540px',
			'tablet': '1024px',
		},
		extend: {
			fontFamily: {
				'montserrat': ["var(--font-montserrat)"]
			},
			colors: {
				'regal-black': '#171717',
				'regal-white': '#FFFFFF',
				'regal-green': '#D2F999',
				'regal-gray': '#E9E9E9',
				'second-gray': '#F3F3F3',
				'grid-100': 'rgb(36,118,22)',
				'grid-200': 'rgb(255,235,59)',
				'grid-300': 'rgb(233,30,99)',
				'grid-500': 'rgb(156,39,176)'
			},
		}
	},
	plugins: [tailwindcssAnimate],
};
export default config;
