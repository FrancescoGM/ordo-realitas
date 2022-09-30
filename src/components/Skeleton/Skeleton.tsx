import { forwardRef } from 'react'

import { SkeletonRoot } from './Skeleton.styles'
import { SkeletonProps } from './Skeleton.types'

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (props, ref) => {
    return <SkeletonRoot ref={ref} {...props} />
  },
)

Skeleton.displayName = 'Skeleton'
