import { forwardRef } from 'react'
import { IoHelp } from 'react-icons/io5'

import { IconRoot } from './Icon.styles'
import { IconProps } from './Icon.types'

export const FallbackIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ as: element, ...rest }, ref) => {
    return (
      <IconRoot
        ref={ref}
        as={element ?? IoHelp}
        data-testid="FallbackIcon"
        {...rest}
      />
    )
  },
)

FallbackIcon.displayName = 'FallbackIcon'

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ as, fallback, ...rest }, ref) => {
    if (!as) return <FallbackIcon ref={ref} as={fallback} {...rest} />

    return <IconRoot ref={ref} as={as} data-testid="Icon" {...rest} />
  },
)

Icon.displayName = 'Icon'
