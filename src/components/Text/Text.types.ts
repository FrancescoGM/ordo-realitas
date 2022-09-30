import { HTMLAttributes, ReactNode } from 'react'

import { VariantProps } from '@stitches/react'

import { TextRoot } from './Text.styles'

type As = 'p' | 'span' | 'strong' | 'i'

export type TextProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof TextRoot> & {
    children?: ReactNode
    as?: As
  }
