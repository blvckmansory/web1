import type { Page } from '~/lib/types'

import { Road } from '~/client/components/Road'

import { WelcomeSection } from './_sections/WelcomeSection'
import { FeatureSection } from './_sections/FeatureSection'
import { ConnectSection } from './_sections/ConnectSection'

const Business: Page = () => (
	<>
		<WelcomeSection />
		<FeatureSection />
		<Road />
		<ConnectSection />
	</>
)

export default Business
