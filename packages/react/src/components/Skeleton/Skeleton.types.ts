import { ReactNode } from 'react'

import { VariantProps, PropertyValue, ComponentProps } from '@stitches/react'

import { theme } from '../../styles'
import { SkeletonRoot } from './Skeleton.styles'

export type SkeletonProps = VariantProps<typeof SkeletonRoot> &
  ComponentProps<typeof SkeletonRoot> & {
    width?: PropertyValue<'width', typeof theme>
    height?: PropertyValue<'height', typeof theme>
    children?: ReactNode
  }
