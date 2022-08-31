import { forwardRef } from 'react'

import { HeadingRoot } from './Heading.styles'
import { HeadingProps } from './Heading.types'

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, ...rest }, ref) => {
    return (
      <HeadingRoot ref={ref} {...rest}>
        {children}
      </HeadingRoot>
    )
  }
)

Heading.displayName = 'Heading'
