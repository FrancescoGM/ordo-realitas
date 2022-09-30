import { forwardRef } from 'react'

import { IconRoot } from './Icon.styles'
import { IconProps } from './Icon.types'

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ as: element, children, ...rest }, ref) => {
    const _children = element ?? children

    if (_children && typeof _children !== 'string') {
      return <IconRoot ref={ref} as={_children as any} {...rest} />
    }

    return (
      <IconRoot ref={ref} {...rest}>
        {_children}
      </IconRoot>
    )
  },
)

Icon.displayName = 'Icon'
