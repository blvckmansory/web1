import { Config } from 'tailwindcss'

const componentsPath = '**/*.{ts,tsx,mdx}'

const config: Config = {
	content: [`./src/${componentsPath}`],
	theme: {
		extend: {
			colors: {
				black: '#1c1a1a',
				white: 'var(--white)',

				card: '#F9F9F9',
				divider: '#DADADA',
				link: {
					active: '#1BCC00',
					default: 'var(--black)',
				},

				primary: 'rgb(var(--primary))',
				primaryLight: 'rgba(var(--primary), 0.15)',

				secondary: 'var(--secondary)',

				ghost: '#969696',

				gray: {
					0: '#1c1a1a',
					100: '#F9F9F9',
					200: '#DADADA',
					300: '',
					400: '#ECECEC',

					600: '',
					700: '',
					800: '',
					900: '',
					1: '#ffffff',
				},

				tag: {
					red: 'var(--tag-red)',
					blue: 'var(--tag-blue)',
					green: 'var(--tag-green)',
					yellow: 'var(--tag-yellow)',
				},
			},
			fontFamily: {
				sans: 'Inter',
			},
			borderRadius: {
				xs: '0.375rem',
				sm: '0.5rem',
				md: '0.75rem',
				lg: '1rem',
				xl: '1.25rem',
			},
			borderWidth: {
				px: '1px',
				2: '2px',
				3: '3px',
			},
			textColor: (utils) => ({
				...utils.theme('colors'),
				muted: '#969696',
				ghost: '#4B4B4B',
				default: utils.theme('colors.black'),
			}),
			borderColor: (utils) => ({
				...utils.theme('colors'),
				muted: '#DADADA',
				ghost: utils.theme('colors.ghost'),
				default: utils.theme('colors.black'),
			}),
			dropShadow: (utils) => ({
				brand: `-2px 2px 0px ${utils.theme('colors.black')}`,
			}),
			transitionDuration: {
				DEFAULT: '150ms',
			},
			transitionTimingFunction: {
				DEFAULT: 'cubic-bezier(.4,0,.6,1)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}

export default config
