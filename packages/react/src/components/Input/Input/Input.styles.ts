import { styled } from '../../../styles'

export const InputRoot = styled('input', {
  width: 'inherit',

  fontFamily: '$default',
  fontWeight: 'normal',
  fontSize: '$md',
  color: '$mauve12',

  borderRadius: '$base',
  backgroundColor: '$mauve1',

  borderColor: '$mauve4',
  borderStyle: 'solid',
  borderWidth: '$mid',

  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s',

  '&:focus': {
    borderColor: '$violet9',
  },

  '&:disabled': {
    opacity: 0.8,
  },

  '&:is(:read-only, :disabled)': {
    cursor: 'not-allowed',
  },

  defaultVariants: {
    size: 'md',
  },

  variants: {
    full: {
      true: {
        width: '100%',
      },
    },
    size: {
      sm: { padding: '$1 $2', fontSize: '$md' },
      md: { padding: '$2 $4', fontSize: '$md' },
      lg: { padding: '$3 $5', fontSize: '$lg' },
      xl: { padding: '$4 $5', fontSize: '$lg' },
    },
    hasLeft: {
      true: {
        paddingLeft: '$10',
      },
    },
    hasRight: {
      true: {
        paddingRight: '$10',
      },
    },
  },
})
