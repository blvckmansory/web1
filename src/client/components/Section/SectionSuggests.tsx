import { Title } from '~/client/ui/components/Text'

import { Section } from './Section'
import { SectionGrid, type SectionGridProps } from './SectionGrid'

const SectionSuggests = (props: SectionGridProps) => (
	<Section className="space-y-5">
		<Title className="col-span-2 !text-2xl">Смотрите также</Title>
		<SectionGrid {...props} />
	</Section>
)

export { SectionSuggests }
