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
    		tablet: '1024px',
    		mobile: '540px'
    	},
    	extend: {
    		fontFamily: {
    			montserrat: ["var(--font-montserrat)"]
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
    			'grid-500': 'rgb(156,39,176)',
    			'bg-Modal': 'rgb(55 65 81 / 30%)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: [tailwindcssAnimate],
};
export default config;
