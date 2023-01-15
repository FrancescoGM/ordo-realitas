import { ComponentProps, VariantProps } from '@stitches/react'

import { HighlightedHeadingRoot } from './HighlightedHeading.styles'

export type HighlightedHeadingProps = ComponentProps<
  typeof HighlightedHeadingRoot
> &
  VariantProps<typeof HighlightedHeadingRoot>
