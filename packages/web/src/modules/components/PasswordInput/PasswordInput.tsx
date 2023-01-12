import { forwardRef } from 'react'
import { IoEyeOffOutline, IoEyeOutline, IoLockClosed } from 'react-icons/io5'

import {
  Input,
  IconButton,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Icon,
  useBoolean,
} from '@ordo-realitas/react'

import { PasswordInputProps } from './PasswordInput.types'

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ ...rest }, ref) => {
    const [visible, { toggle }] = useBoolean()

    return (
      <InputGroup>
        <InputLeftAddon>
          <Icon as={IoLockClosed} />
        </InputLeftAddon>
        <Input ref={ref} type={visible ? 'text' : 'password'} {...rest} />
        <InputRightAddon>
          <IconButton
            onClick={toggle}
            variant="tertiary"
            aria-label={visible ? 'Mostrar a senha' : 'Esconder a senha'}
          >
            {visible ? <IoEyeOutline /> : <IoEyeOffOutline />}
          </IconButton>
        </InputRightAddon>
      </InputGroup>
    )
  },
)

PasswordInput.displayName = 'PasswordInput'
