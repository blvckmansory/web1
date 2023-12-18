import type { CSSProperties } from 'react'

import type { UseCheckboxProps } from '~/client/ui/(hooks)/useCheckbox'

type ToggleBaseProps = UseCheckboxProps &
	Partial<{
		containerClassName: string
		containerStyle: CSSProperties
	}>

export type { ToggleBaseProps }
