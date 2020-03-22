module.exports = {
	theme: {
		extend: {
			colors: {
				darkgray: '#1A1A1A',
				lightgray: '#FAFAFA',
				mediumgray: '#DDDDDD',
				mixedgray: '#AAAAAA',
				somegray: '#777777',

				blue: '#20639b',
				white: 'white',

				primary: {
					default: '#0896B6',
					light: '#46AAC0',
				},
				secondary: {
					default: '#98118A',
					light: '#B112A2',
				},
				tertiary: {
					default: '#EF9A1B',
					light: '#FDB343',
				},
				success: {
					default: '#00820D',
					light: '#42AD4D',
				},
				error: '#B112A2',
			},
			maxHeight: {
				0: '0',
			},
			spacing: {
				11: '2.75rem',
				'1/2': '50%',
				14: '3.5rem',
				9: '2.25rem',
			},
		},
		fontFamily: {
			serif: ['Crete Round', 'serif'],
			sans: ['Open Sans', 'sans'],
		},
		fontSize: {
			xl: '2.25rem',
			lg: '1.5rem',
			md: '1.25rem',
			sm: '0.6875rem',
			base: '0.9375rem',
			13: '0.8125rem',
		},
		borderRadius: {
			lg: '0.9375rem',
			md: '0.625rem',
			default: '0.5rem',
			full: '9999px',
		},
		boxShadow: {
			lg: '0px 4px 40px rgba(0, 0, 0, 0.25)',
			inner: 'inset 0px 4px 10px rgba(0, 0, 0, 0.25)',
		},
	},
	variants: {},
	plugins: [],
};
