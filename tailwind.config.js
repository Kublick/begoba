module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false,
	theme: {
		fontFamily: {
			display: ['Montserrat', 'sans-serif'],
			body: ['Montserrat', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: {
					light: '#DBE2F3',
					DEFAULT: '#21409A',
					dark: '#13255C',
				},
				secondary: {
					light: '#F6AFC8',
					DEFAULT: '#E7407B',
					dark: '#F6AFC8',
				},
				mango: {
					DEFAULT: '#FF833D',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
