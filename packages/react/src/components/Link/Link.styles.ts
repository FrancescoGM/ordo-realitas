import { styled } from '../../styles'

export const LinkRoot = styled('a', {
  fontFamily: '$default',
  borderRadius: '$base',

  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',

  outline: 'none',
  textDecoration: 'none',
  boxSizing: 'border-box',

  transition: 'box-shadow 0.2s',

  defaultVariants: {
    colorScheme: 'white',
  },

  variants: {
    colorScheme: {
      violet: {
        color: '$violet10',
        '&:visited': { color: '$violet10' },
      },
      white: {
        color: '$mauve12',
        '&:visited': { color: '$mauve12' },
      },
      grayLight: {
        color: '$mauve11',
        '&:visited': { color: '$mauve11' },
      },
      gray: {
        color: '$mauve10',
        '&:visited': { color: '$mauve10' },
      },
    },
  },

  '&:hover': {
    textDecoration: 'underline',
  },

  '&:focus-visible': {
    boxShadow: '$outlined',
  },
})
