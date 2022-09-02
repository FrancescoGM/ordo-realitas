import { forwardRef, ForwardRefRenderFunction } from 'react'

import { Spinner } from '../Spinner'
import {
  ButtonRoot,
  ButtonLoadingContainer,
  ButtonTextContainer,
} from './Button.styles'
import { ButtonProps } from './Button.types'

const ButtonRaw: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, size = 'md', loading = false, disabled = false, ...rest },
  ref,
) => {
  return (
    <ButtonRoot
      size={size}
      loading={loading}
      disabled={loading || disabled}
      blocked={disabled}
      type="button"
      ref={ref}
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
}

export const Button = forwardRef(ButtonRaw)
