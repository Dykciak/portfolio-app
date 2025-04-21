/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["montserrat", "sans-serif"],
			},
			animation: {
				"text-gradient": "text 2.5s linear infinite", // Definiujesz animację
			},
			colors: {
				blue: {
					30: "#050505",
					50: "#a9a9a9",
				},
				orange: {
					35: "#363636",
					40: "#fdfdfd",
					45: "#7b7b7b",
					50: "#31185c",
					55: "#27065f",
					60: "#240c4d",
					65: "#504f52",
					70: "#bcaefe",
					80: "#000000",
				},
			},
			backgroundImage: {
				"hero-img-tel": "url('/test-hero.jpg')",
				"hero-img-pc": "url('/hero-pc.webp')",
				skills: "url('/blob.png')",
			},
			keyframes: {
				text: {
					to: {
						backgroundPosition: "200% center",
					},
				},
			},
		},
	},
	plugins: [],
};
