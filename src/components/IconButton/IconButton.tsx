import { forwardRef } from 'react'

import { Spinner } from '@components/Spinner'

import {
  IconButtonLoadingContainer,
  IconButtonRoot,
  IconButtonTextContainer,
} from './IconButton.styles'
import { IconButtonProps } from './IconButton.types'

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { children, size = 'md', loading = false, disabled = false, ...rest },
    ref,
  ) => {
    return (
      <IconButtonRoot
        size={size}
        loading={loading}
        disabled={loading || disabled}
        blocked={disabled}
        type="button"
        ref={ref}
        {...rest}
      >
        <IconButtonTextContainer loading={loading}>
          {children}
        </IconButtonTextContainer>
        {loading && (
          <IconButtonLoadingContainer>
            <Spinner size={size} />
          </IconButtonLoadingContainer>
        )}
      </IconButtonRoot>
    )
  },
)

IconButton.displayName = 'IconButton'
