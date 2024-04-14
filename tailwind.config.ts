import { Config } from 'tailwindcss'

const componentsPath = '**/*.{ts,tsx,mdx}'

const config: Config = {
	content: [`./src/${componentsPath}`],
	theme: {
		extend: {
			colors: {
				black: '#1c1a1a',
				white: '#ffffff',

				card: '#F9F9F9',
				divider: '#DADADA',
				link: {
					active: '#1BCC00',
					default: '#1c1a1a',
				},

				primaryText: '#15A000',
				primary: 'rgb(34, 255, 1)',
				primaryLight: 'rgba(34, 255, 1, 0.15)',

				secondary: '#ffffff',

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
					red: '#ffc5c8',
					blue: '#b9e2f8',
					green: '#40d39c',
					yellow: '#ffd05b',
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

			keyframes: {
				drivingLeft: {
					'0%': { transform: 'translateX(250px)' },
					'80%': { transform: 'translateX(calc(-250px - 100vw))' },
					'100%': { transform: 'translateX(calc(-250px - 100vw))' },
				},
				drivingRight: {
					'0%': { transform: 'translateX(-250px)' },
					'80%': { transform: 'translateX(calc(300px + 100vw))' },
					'100%': { transform: 'translateX(calc(300px + 100vw))' },
				},
			},
			animation: {
				drivingLeft: 'drivingLeft 7s linear infinite',
				drivingRight: 'drivingRight 7s linear 2s infinite',
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
