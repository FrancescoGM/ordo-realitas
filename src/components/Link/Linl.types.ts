import { LinkProps as NextLinkProps } from 'next/link'
import { ReactNode } from 'react'

import { VariantProps } from '@stitches/react'

import { LinkRoot } from './Link.styles'

export type LinkProps = NextLinkProps &
  VariantProps<typeof LinkRoot> & {
    children: ReactNode
  }
