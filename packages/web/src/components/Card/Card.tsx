import { forwardRef } from 'react'

import { CardRoot } from './Card.styles'
import { CardProps } from './Card.types'

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, ...rest }, ref) => {
    return (
      <CardRoot ref={ref} {...rest}>
        {children}
      </CardRoot>
    )
  },
)

Card.displayName = 'Card'
