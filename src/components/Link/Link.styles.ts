import { styled } from '@stitches'

export const LinkRoot = styled('a', {
  outline: 'none',
  transition: 'box-shadow 0.2s',
  borderRadius: '$base',
  textDecoration: 'none',

  defaultVariants: {
    colorScheme: 'white'
  },

  variants: {
    colorScheme: {
      white: {
        color: '$mauve12',
        '&:visited': { color: '$mauve12' }
      },
      grayLight: {
        color: '$mauve11',
        '&:visited': { color: '$mauve11' }
      },
      gray: {
        color: '$mauve10',
        '&:visited': { color: '$mauve10' }
      }
    }
  },

  '&:hover': {
    textDecoration: 'underline'
  },

  '&:focus-visible': {
    boxShadow: '$outlined'
  }
})
