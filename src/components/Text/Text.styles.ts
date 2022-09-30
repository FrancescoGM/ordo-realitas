import { styled } from '@stitches'

export const TextRoot = styled('p', {
  display: 'inline-block',

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
