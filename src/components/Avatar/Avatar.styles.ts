import * as Primitives from '@radix-ui/react-avatar'
import { styled } from '@stitches-config'

export const AvatarRoot = styled(Primitives.Root, {
  borderRadius: '$pill',
  border: '$colors$mauve12 solid $borderWidths$mid',

  display: 'block',

  defaultVariants: {
    size: 'md',
  },

  variants: {
    size: {
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

export const AvatarImage = styled(Primitives.Image, {
  width: '100%',
  height: '100%',
  borderRadius: '$pill',
})

export const AvatarFallback = styled(Primitives.Fallback, {
  width: '100%',
  height: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
