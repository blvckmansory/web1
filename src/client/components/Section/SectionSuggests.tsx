import { Title } from '~/client/ui/components/Text'

import { Section, type SectionProps } from './Section'

const SectionSuggests = (props: SectionProps) => (
	<Section className="space-y-5">
		<Title className="col-span-2 !text-2xl">Смотрите также</Title>
		<div {...props} />
	</Section>
)

export { SectionSuggests }
