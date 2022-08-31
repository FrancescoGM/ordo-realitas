import { ReactNode } from 'react'

import { VariantProps } from '@stitches/react'

import { InputGroupRoot } from './InputGroup.styles'

export type InputGroupProps = VariantProps<typeof InputGroupRoot> & {
  children: ReactNode
}
