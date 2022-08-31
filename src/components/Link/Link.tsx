import NextLink from 'next/link'
import { forwardRef } from 'react'

import { LinkRoot } from './Link.styles'
import { LinkProps } from './Linl.types'

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, colorScheme, ...rest }, ref) => {
    return (
      <NextLink ref={ref} {...rest} passHref>
        <LinkRoot colorScheme={colorScheme}>{children}</LinkRoot>
      </NextLink>
    )
  }
)

Link.displayName = 'Link'
