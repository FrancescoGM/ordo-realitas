import { HTMLAttributes, ReactNode } from 'react'

import { VariantProps } from '@stitches/react'

import { TextRoot } from './Text.styles'

type As =
  | 'b'
  | 'i'
  | 'u'
  | 'q'
  | 'dfn'
  | 'data'
  | 'time'
  | 'code'
  | 'var'
  | 'abbr'
  | 'cite'
  | 'del'
  | 'em'
  | 'ins'
  | 'kbd'
  | 'bdo'
  | 'bdi'
  | 'ins'
  | 'del'
  | 'ruby'
  | 'rb'
  | 'rt'
  | 'rtc'
  | 'rp'
  | 'mark'
  | 's'
  | 'samp'
  | 'sub'
  | 'sup'
  | 'p'
  | 'span'
  | 'strong'
  | 'small'

export type TextProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof TextRoot> & {
    noOfLines?: number
    children?: ReactNode
    as?: As
  }
