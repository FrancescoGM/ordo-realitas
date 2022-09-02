import { useRef, useState, useCallback } from 'react'
import {
  IoEyeOffOutline,
  IoEyeOutline,
  IoLockClosedOutline,
} from 'react-icons/io5'

import { IconButton } from '@components/IconButton'
import { UnformInput } from '@modules/UnformInput'

import { UnformPasswordInputProps } from './UnformPasswordInput.types'

export function UnformPasswordInput({ ...rest }: UnformPasswordInputProps) {
  const [visible, setVisible] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const toggle = useCallback(() => {
    setVisible((_visible) => !_visible)
    inputRef.current?.focus()
  }, [])

  return (
    <UnformInput
      ref={inputRef}
      type={visible ? 'text' : 'password'}
      leftIcon={<IoLockClosedOutline />}
      rightIcon={
        <IconButton
          onClick={toggle}
          variant="tertiary"
          aria-label={visible ? 'Mostrar a senha' : 'Esconder a senha'}
        >
          {visible ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </IconButton>
      }
      {...rest}
    />
  )
}
