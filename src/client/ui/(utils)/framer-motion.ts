import type { Spring, Target, TargetAndTransition, Transition } from 'framer-motion'

type WithMotionState<P> = Partial<Record<'enter' | 'exit', P>>

export type TransitionConfig = WithMotionState<Transition>

export type TransitionEndConfig = WithMotionState<Target>

export type TransitionProperties = {
	/**
	 * Custom `transition` definition for `enter` and `exit`
	 */
	transition?: TransitionConfig
	/**
	 * Custom `transitionEnd` definition for `enter` and `exit`
	 */
	transitionEnd?: TransitionEndConfig
}

type TargetResolver<P = {}> = (props: P & TransitionProperties) => TargetAndTransition

type Variant<P = {}> = TargetAndTransition | TargetResolver<P>

export type Variants<P = {}> = Record<
	string,
	{
		enter: Variant<P>
		exit: Variant<P>
		initial?: Variant<P>
	}
>

export const slideTransition: Spring = {
	type: 'spring',
	damping: 30,
	stiffness: 400,
}

export const TRANSITION_EASINGS = {
	ease: [0.36, 0.66, 0.4, 1],
	easeIn: [0.4, 0, 1, 1],
	easeOut: [0, 0, 0.2, 1],
	easeInOut: [0.4, 0, 0.2, 1],
	spring: [0.155, 1.105, 0.295, 1.12],
	springOut: [0.57, -0.15, 0.62, 0.07],
	softSpring: [0.16, 1.11, 0.3, 1.02],
} as const

export const TRANSITION_DEFAULTS = {
	enter: {
		duration: 0.2,
		ease: TRANSITION_EASINGS.easeOut,
	},
	exit: {
		duration: 0.1,
		ease: TRANSITION_EASINGS.easeIn,
	},
} as const

export const TRANSITION_VARIANTS = {
	scaleSpring: {
		enter: {
			transform: 'scale(1)',
			opacity: 1,
			transition: {
				type: 'spring',
				bounce: 0,
				duration: 0.3,
			},
		},
		exit: {
			transform: 'scale(0.6)',
			opacity: 0,
			transition: {
				type: 'easeOut',
				duration: 0.2,
			},
		},
	},
	scaleSpringOpacity: {
		initial: {
			opacity: 0,
			transform: 'scale(0.6)',
		},
		enter: {
			opacity: 1,
			transform: 'scale(1)',
			transition: {
				type: 'spring',
				bounce: 0,
				duration: 0.5,
			},
		},
		exit: {
			opacity: 0,
			transform: 'scale(0.1)',
			transition: {
				type: 'spring',
				bounce: 0,
				duration: 0.5,
			},
		},
	},
	scale: {
		enter: { scale: 1 },
		exit: { scale: 0 },
	},
	scaleFadeIn: {
		enter: {
			transform: 'scale(1)',
			opacity: 1,
			transition: {
				transform: {
					duration: 0.4,
					ease: TRANSITION_EASINGS.easeOut,
				},
				opacity: {
					duration: 0.3,
					ease: TRANSITION_EASINGS.easeOut,
				},
			},
		},
		exit: {
			transform: 'scale(0.95)',
			opacity: 0,
			transition: {
				transform: {
					duration: 0.3,
					ease: TRANSITION_EASINGS.easeIn,
				},
				opacity: {
					duration: 0.2,
					ease: TRANSITION_EASINGS.easeIn,
				},
			},
		},
	},
	scaleInOut: {
		enter: {
			transform: 'scale(1)',
			opacity: 1,
			transition: {
				duration: 0.4,
				ease: TRANSITION_EASINGS.ease,
			},
		},
		exit: {
			transform: 'scale(1.03)',
			opacity: 0,
			transition: {
				duration: 0.3,
				ease: TRANSITION_EASINGS.ease,
			},
		},
	},
	fade: {
		enter: {
			opacity: 1,
			transition: {
				duration: 0.4,
				ease: TRANSITION_EASINGS.ease,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.3,
				ease: TRANSITION_EASINGS.ease,
			},
		},
	},
	translateFade: {
		enter: {
			opacity: 1,
			translateY: '0px',
			transition: {
				translateY: {
					duration: 0.4,
					ease: TRANSITION_EASINGS.easeOut,
				},
				opacity: {
					duration: 0.3,
					ease: TRANSITION_EASINGS.easeOut,
				},
			},
		},
		exit: {
			opacity: 0,
			translateY: '-40px',
			transition: {
				translateY: {
					duration: 0.5,
					ease: TRANSITION_EASINGS.easeIn,
				},
				opacity: {
					duration: 0.3,
					ease: TRANSITION_EASINGS.easeIn,
				},
			},
		},
	},
	slideFade: {
		enter: {
			opacity: 1,
			translateY: '0%',
			transition: {
				translateY: {
					duration: 0.2,
					ease: TRANSITION_EASINGS.easeOut,
				},
				opacity: {
					duration: 0.2,
					ease: TRANSITION_EASINGS.easeOut,
				},
			},
		},
		exit: {
			opacity: 0,
			translateY: '-20%',
			transition: {
				translateY: {
					duration: 0,
					ease: TRANSITION_EASINGS.ease,
				},
				opacity: {
					duration: 0,
					ease: TRANSITION_EASINGS.ease,
				},
			},
		},
	},
	collapse: {
		enter: {
			opacity: 1,
			height: 'auto',
			transition: {
				height: {
					type: 'spring',
					bounce: 0,
					duration: 0.3,
				},
				opacity: {
					easings: 'ease',
					duration: 0.4,
				},
			},
		},
		exit: {
			opacity: 0,
			height: 0,
			transition: {
				easings: 'ease',
				duration: 0.3,
			},
		},
	},
} satisfies Variants

type PositionTranslate = 'right' | 'bottom' | 'top' | 'left'

const TRANSITION_TRANSLATE_DEFAULTS = {
	enter: {
		duration: 0.4,
		ease: TRANSITION_EASINGS.easeOut,
	},
	exit: {
		duration: 0.4,
		ease: TRANSITION_EASINGS.easeIn,
	},
} as const

export const TRANSTION_TRANSLATES = {
	top: {
		enter: {
			translateY: '0%',
			transition: TRANSITION_TRANSLATE_DEFAULTS.enter,
		},
		exit: {
			translateY: '-100%',
			transition: TRANSITION_TRANSLATE_DEFAULTS.exit,
		},
	},
	left: {
		enter: {
			translateX: '0%',
			transition: TRANSITION_TRANSLATE_DEFAULTS.enter,
		},
		exit: {
			translateX: '-100%',
			transition: TRANSITION_TRANSLATE_DEFAULTS.exit,
		},
	},
	right: {
		enter: {
			translateX: '0%',
			transition: TRANSITION_TRANSLATE_DEFAULTS.enter,
		},
		exit: {
			translateX: '100%',
			transition: TRANSITION_TRANSLATE_DEFAULTS.exit,
		},
	},
	bottom: {
		enter: {
			translateY: '0%',
			transition: TRANSITION_TRANSLATE_DEFAULTS.enter,
		},
		exit: {
			translateY: '100%',
			transition: TRANSITION_TRANSLATE_DEFAULTS.exit,
		},
	},
} satisfies Variants<PositionTranslate>
