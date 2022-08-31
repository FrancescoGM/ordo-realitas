import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel
} from '@components/FormControl'
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon
} from '@components/Input'
import { useField } from '@unform/core'

import { UnformInputProps } from './UnformInput.types'

type InputRef = HTMLInputElement | null

export const UnformInput = forwardRef<HTMLInputElement, UnformInputProps>(
  (
    {
      name,
      label,
      isReadOnly,
      isRequired,
      isDisabled,
      isInvalid,
      leftIcon,
      rightIcon,
      helperText,
      ...rest
    },
    ref
  ) => {
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

    useImperativeHandle<InputRef, InputRef>(ref, () => inputRef.current, [])

    return (
      <FormControl
        isInvalid={isInvalid ?? !!error}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
        isDisabled={isDisabled}
      >
        {label && <FormLabel>{label}</FormLabel>}
        <InputGroup>
          {leftIcon && <InputLeftAddon>{leftIcon}</InputLeftAddon>}
          <Input
            ref={inputRef}
            defaultValue={defaultValue}
            onFocus={clearError}
            {...rest}
          />
          {rightIcon && <InputRightAddon>{rightIcon}</InputRightAddon>}
        </InputGroup>
        {error ? (
          <FormErrorMessage>{error}</FormErrorMessage>
        ) : (
          helperText && <FormHelperText>{helperText}</FormHelperText>
        )}
      </FormControl>
    )
  }
)

UnformInput.displayName = 'UnformInput'
