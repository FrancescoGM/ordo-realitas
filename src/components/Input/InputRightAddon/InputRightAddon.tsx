import { forwardRef } from 'react'

import { InputRightAddonRoot } from './InputRightAddon.styles'
import { InputRightAddonProps } from './InputRightAddon.types'

export const InputRightAddon = forwardRef<
  HTMLSpanElement,
  InputRightAddonProps
>(({ children, ...rest }, ref) => {
  return (
    <InputRightAddonRoot ref={ref} {...rest}>
      {children}
    </InputRightAddonRoot>
  )
})

InputRightAddon.displayName = 'InputRightAddon'
