import { HTMLAttributes, SVGAttributes } from 'react'

import { VariantProps } from '@stitches/react'

import { IconRoot } from './Icon.styles'

export type IconColors = 'blue' | 'yellow' | 'gray' | 'green' | 'red'

export type IconProps = VariantProps<typeof IconRoot> &
  HTMLAttributes<SVGAttributes<HTMLElement>> & {
    as?: any
    fallback?: any
  }
