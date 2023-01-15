import { ComponentProps, VariantProps } from '@stitches/react'

import { CardRoot } from './Card.styles'

export type CardProps = ComponentProps<typeof CardRoot> &
  VariantProps<typeof CardRoot>
