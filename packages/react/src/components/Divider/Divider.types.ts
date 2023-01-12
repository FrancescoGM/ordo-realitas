import { ComponentProps, VariantProps } from '@stitches/react'

import { DividerRoot } from './Divider.styles'

export type DividerProps = VariantProps<typeof DividerRoot> &
  ComponentProps<typeof DividerRoot> & {
    orientation?: 'horizontal' | 'vertical'
  }
