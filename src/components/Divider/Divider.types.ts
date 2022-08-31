import { HTMLAttributes } from 'react'

import { VariantProps } from '@stitches/react'

import { DividerRoot } from './Divider.styles'

export type DividerProps = VariantProps<typeof DividerRoot> &
  HTMLAttributes<HTMLHRElement> & {
    orientation?: 'horizontal' | 'vertical'
  }
