import { HTMLAttributes, ReactNode } from 'react'

import { VariantProps } from '@stitches/react'

import { HeadingRoot } from './Heading.styles'

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof HeadingRoot> & {
    children?: ReactNode
    as?: As
    noOfLines?: number
  }
