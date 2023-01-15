import { forwardRef } from 'react'

import { HeadingRoot, HeadingSlot } from './Heading.styles'
import { HeadingProps } from './Heading.types'

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { children, asChild, noOfLines, fontWeight, fontSize = '$md', ...rest },
    ref,
  ) => {
    const Comp = asChild ? HeadingSlot : HeadingRoot

    return (
      <Comp ref={ref} css={{ noOfLines, fontWeight, fontSize }} {...rest}>
        {children}
      </Comp>
    )
  },
)

Heading.displayName = 'Heading'
