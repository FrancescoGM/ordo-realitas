import { forwardRef, useMemo } from 'react'

import { isNumber } from '../../utils'
import { SkeletonRoot } from './Skeleton.styles'
import { SkeletonProps } from './Skeleton.types'

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ width, height, children, css, ...rest }, ref) => {
    const _width = useMemo(
      () => (isNumber(Number(width)) ? `${width}px` : width),
      [width],
    )
    const _height = useMemo(
      () => (isNumber(Number(height)) ? `${height}px` : height),
      [height],
    )

    return (
      <SkeletonRoot
        ref={ref}
        css={{ width: _width, height: _height, ...css }}
        data-testid="Skeleton"
        {...rest}
      >
        {children}
      </SkeletonRoot>
    )
  },
)
Skeleton.displayName = 'Skeleton'
