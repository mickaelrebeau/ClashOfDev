/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./public/**/*.html",
		"./src/**/*.{js,jsx,ts,tsx,vue}",
	],
	theme: {
		extend: {
			maxWidth: {
				'144': '1440px',
			},
			fontSize: {
				'custom': '115px',
			},
			width: {
				'card': '1376px',
			},
			height: {
				'custom': '600px',
				'card': '860px',
			},
			colors: {
				'cod-black': '#262625',
				'cod-white': '#F3F3F1',
				'cod-blue': '#EBEDFF',
				'cod-pink': '#FFEDF5',
				'cod-green': '#ECFFCE',
				'cod-dark-blue': '#BADAFF',
				'cod-yellow': '#FFFAC2',
				'cod-orange': ' #FFBCAB',
			},
			borderRadius: {
				'card': '60px',
			},
		},
	},
	plugins: [],
};

