import * as Primitives from '@radix-ui/react-avatar'

import { styled } from '../../styles'

export const AvatarRoot = styled(Primitives.Root, {
  borderRadius: '$pill',
  border: '$colors$mauve12 solid $borderWidths$mid',

  display: 'block',
  boxSizing: 'border-box',

  defaultVariants: {
    size: 'md',
  },

  variants: {
    size: {
      sm: {
        width: '$8',
        height: '$8',
      },
      md: {
        width: '$10',
        height: '$10',
      },
      lg: {
        width: '$12',
        height: '$12',
      },
      xl: {
        width: '$16',
        height: '$16',
      },
      '2xl': {
        width: '$20',
        height: '$20',
      },
      '3xl': {
        width: '$40',
        height: '$40',

        padding: '$2',
      },
    },
  },
})

export const AvatarImageRoot = styled(Primitives.Image, {
  width: '100%',
  height: '100%',
  borderRadius: '$pill',

  objectFit: 'cover',
  boxSizing: 'border-box',
})

export const AvatarFallbackRoot = styled(Primitives.Fallback, {
  width: '100%',
  height: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  boxSizing: 'border-box',
})
