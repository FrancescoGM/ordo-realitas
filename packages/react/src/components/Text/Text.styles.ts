import { Slot } from '@radix-ui/react-slot'

import { styled } from '../../styles'

export const TextSlot = styled(Slot)

export const TextRoot = styled('p', {
  fontFamily: '$highlight',
  color: '$mauve12',

  boxSizing: 'border-box',

  defaultVariants: {
    size: 'md',
  },

  variants: {
    size: {
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '3xl': { fontSize: '$3xl' },
      '4xl': { fontSize: '$4xl' },
    },
  },
})
