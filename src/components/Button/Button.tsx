import { forwardRef } from 'react'

import { Spinner } from '../Spinner'
import {
  ButtonRoot,
  ButtonLoadingContainer,
  ButtonTextContainer,
} from './Button.styles'
import { ButtonProps } from './Button.types'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, size = 'md', loading = false, disabled = false, ...rest },
    ref,
  ) => {
    return (
      <ButtonRoot
        ref={ref}
        size={size}
        loading={loading}
        disabled={loading || disabled}
        blocked={disabled}
        type="button"
        {...rest}
      >
        <ButtonTextContainer loading={loading}>{children}</ButtonTextContainer>
        {loading && (
          <ButtonLoadingContainer>
            <Spinner size={size} />
          </ButtonLoadingContainer>
        )}
      </ButtonRoot>
    )
  },
)
Button.displayName = 'Button'
