import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { Image } from '~/client/ui/components/Image'

type RoadProps = StyleProps & {}

const Road = ({ style, className, ...props }: RoadProps) => (
	<div
		{...props}
		style={style}
		className={clsx(
			'relative z-0 w-screen flex flex-col bg-black rounded-md overflow-hidden',
			className,
		)}>
		<div className="h-28 flex items-center">
			<RoadCar
				type="white"
				style={{ right: `${(0.1 + Math.random() - 0.5) * 100}%` }}
			/>
		</div>

		<RoadMarkings />

		<div className="h-28 flex items-center">
			<RoadCar
				type="black"
				style={{ left: `${(0.1 + Math.random() - 0.5) * 100}%` }}
			/>
		</div>
	</div>
)

const RoadMarkings = () => (
	<div className="relative w-screen h-1">
		<div className="px-4 absolute flex items-center gap-x-20">
			{[...new Array(18)].map((_, idx) => (
				<span
					key={idx}
					className="w-16 h-1 bg-white rounded-full"
				/>
			))}
		</div>
	</div>
)

type RoadCarProps = StyleProps & {
	type?: 'white' | 'black'
	direction?: 'left' | 'right'
}

const RoadCar = ({ style, className, type = 'black' }: RoadCarProps) => (
	<Image
		alt={`road-car-${type}`}
		width={40}
		style={style}
		src={`/assets/car-road-${type}.png`}
		className={clsx('absolute h-auto w-10 -rotate-90 pointer-events-none', className)}
	/>
)

export { Road }
