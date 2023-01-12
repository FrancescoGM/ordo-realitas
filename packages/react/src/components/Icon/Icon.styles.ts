import { styled } from '../../styles'

export const IconRoot = styled('svg', {
  boxSizing: 'border-box',
  color: '$mauve12',

  transition: 'color 0.2s',

  defaultVariants: {
    size: 'lg',
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
    colorScheme: {
      red: { color: '$tomato9' },
      green: { color: '$grass9' },
      violet: { color: '$violet9' },
      yellow: { color: '$amber9' },
      blue: { color: '$blue9' },
      gray: { color: '$mauve9' },
      black: { color: '$mauve1' },
      white: { color: '$mauve12' },
    },
  },
})
