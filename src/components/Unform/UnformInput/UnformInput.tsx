import { useEffect, useRef } from 'react'

import { useField } from '@unform/core'

import { Input } from '../../Input'
import { UnformInputProps } from './UnformInput.types'

export function UnformInput({ name, ...rest }: UnformInputProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, clearError, error, registerField } =
    useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Input
      ref={inputRef}
      defaultValue={defaultValue}
      onFocus={clearError}
      error={error}
      {...rest}
    />
  )
}
