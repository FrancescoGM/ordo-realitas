import { ReactNode } from 'react'

import { VariantProps } from '@stitches/react'

import { IconRoot } from './Icon.styles'

export type IconProps = VariantProps<typeof IconRoot> & {
  as?: any
  children?: ReactNode
}
