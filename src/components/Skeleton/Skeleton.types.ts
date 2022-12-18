import { ReactNode } from 'react'

import { Theme } from '@stitches-config'
import { VariantProps } from '@stitches/react'

import { SkeletonRoot } from './Skeleton.styles'

type Sizes = number | `$${keyof Theme['sizes']}`

export type SkeletonProps = VariantProps<typeof SkeletonRoot> & {
  width?: Sizes
  height?: Sizes
  children?: ReactNode
}
