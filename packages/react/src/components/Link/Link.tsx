import { forwardRef } from 'react'

import { LinkRoot } from './Link.styles'
import { LinkProps } from './Link.types'

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, ...rest }, ref) => {
    return (
      <LinkRoot ref={ref} {...rest}>
        {children}
      </LinkRoot>
    )
  },
)

Link.displayName = 'Link'
