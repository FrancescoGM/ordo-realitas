import { ReactElement, ComponentType } from 'react'

import { ComponentProps, VariantProps } from '@stitches/react'

import { LinkRoot } from './Link.styles'

export type LinkProps = VariantProps<typeof LinkRoot> &
  ComponentProps<typeof LinkRoot> & {
    as?: ReactElement | ComponentType
    asChild?: boolean
    external?: boolean
  }
