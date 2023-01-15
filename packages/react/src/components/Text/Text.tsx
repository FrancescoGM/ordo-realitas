import { forwardRef } from 'react'

import { TextRoot, TextSlot } from './Text.styles'
import { TextProps } from './Text.types'

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, asChild, noOfLines, ...rest }, ref) => {
    const Comp = asChild ? TextSlot : TextRoot

    return (
      <Comp ref={ref} css={{ noOfLines }} {...rest}>
        {children}
      </Comp>
    )
  },
)

Text.displayName = 'Text'
