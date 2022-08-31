import { useRef } from 'react'

import { InputLeftAddonRoot } from './InputLeftAddon.styles'
import { InputLeftAddonProps } from './InputLeftAddon.types'

export function InputLeftAddon({
  children,
  ...rest
}: InputLeftAddonProps): JSX.Element {
  const ref = useRef<HTMLSpanElement>(null)

  return (
    <InputLeftAddonRoot ref={ref} {...rest}>
      {children}
    </InputLeftAddonRoot>
  )
}

InputLeftAddon.id = 'InputLeftAddon'
