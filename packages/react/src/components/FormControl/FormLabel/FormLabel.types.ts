import { ReactNode } from 'react'

import { ComponentProps } from '@stitches/react'

import { FormLabelRoot } from './FormLabel.styles'

export type FormLabelProps = ComponentProps<typeof FormLabelRoot> & {
  children?: ReactNode
  requiredIndicator?: ReactNode
  optionalIndicator?: ReactNode
}
