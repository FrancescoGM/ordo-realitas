import { forwardRef, useMemo } from 'react'

import { LinkRoot, LinkSlot } from './Link.styles'
import { LinkProps } from './Link.types'

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, asChild, external, ...rest }, ref) => {
    const Comp = asChild ? LinkSlot : LinkRoot

    const externalArgs = useMemo(
      () =>
        external
          ? {
              target: '_blank',
              rel: 'noopener',
            }
          : {},
      [external],
    )

    return (
      <Comp ref={ref} {...rest} {...externalArgs}>
        {children}
      </Comp>
    )
  },
)

Link.displayName = 'Link'
