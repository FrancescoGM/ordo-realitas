import { forwardRef } from 'react'

import { InputLeftAddonRoot } from './InputLeftAddon.styles'
import { InputLeftAddonProps } from './InputLeftAddon.types'

export const InputLeftAddon = forwardRef<HTMLSpanElement, InputLeftAddonProps>(
  ({ children, ...rest }, ref) => {
    return (
      <InputLeftAddonRoot ref={ref} {...rest}>
        {children}
      </InputLeftAddonRoot>
    )
  },
)

InputLeftAddon.displayName = 'InputLeftAddon'
