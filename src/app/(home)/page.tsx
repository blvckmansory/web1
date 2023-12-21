import dynamic from 'next/dynamic'

import type { Page } from '~/lib/types'

import { Skeleton } from '~/client/ui/components/Skeleton'

import { Road } from '~/client/components/Road'

import { PostSection } from './_sections/PostSection'
import { WelcomeSection } from './_sections/WelcomeSection'
import { FeatureSection } from './_sections/FeatureSection'
import { DownloadSection } from './_sections/DownloadSection'

const Landing: Page = () => (
	<>
		<WelcomeSection />
		<FeatureSection />
		<Road />
		<TargetSection />
		<Road />
		<PostSection />
		<Road />
		<DownloadSection />
	</>
)

const TargetSection = dynamic(() => import('./_sections/TargetSection'), {
	loading: () => <Skeleton className="w-full h-[554px] lg:h-[658px]" />,
})

export default Landing
