import { HTMLAttributes, ReactNode } from 'react'

import { PropertyValue, VariantProps } from '@stitches/react'

import { theme } from '../../styles'
import { HeadingRoot } from './Heading.styles'

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof HeadingRoot> & {
    children?: ReactNode
    asChild?: boolean
    as?: As
    fontSize?: PropertyValue<'fontSize', typeof theme>
    fontWeight?: PropertyValue<'fontWeight', typeof theme>
    noOfLines?: number
  }
