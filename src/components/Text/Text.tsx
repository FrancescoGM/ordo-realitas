import { forwardRef } from 'react'

import { TextRoot } from './Text.styles'
import { TextProps } from './Text.types'

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ children, ...rest }, ref) => {
    return (
      <TextRoot ref={ref} {...rest}>
        {children}
      </TextRoot>
    )
  },
)

Text.displayName = 'Text'
