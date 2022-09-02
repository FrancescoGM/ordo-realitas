import { InputRightAddonRoot } from './InputRightAddon.styles'
import { InputRightAddonProps } from './InputRightAddon.types'

export function InputRightAddon({ children, ...rest }: InputRightAddonProps) {
  return <InputRightAddonRoot {...rest}>{children}</InputRightAddonRoot>
}

InputRightAddon.id = 'InputRightAddon'
