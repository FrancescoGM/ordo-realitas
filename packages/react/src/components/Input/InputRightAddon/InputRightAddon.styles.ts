import { styled } from '../../../styles'

export const InputRightAddonRoot = styled('span', {
  height: '$8',
  width: '38px',

  position: 'absolute',
  top: '50%',
  right: 0,
  transform: 'translateY(-50%)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  boxSizing: 'border-box',

  svg: {
    color: '$mauve11',
  },

  defaultVariants: {
    size: 'md',
  },

  variants: {
    size: {
      sm: { svg: { fontSize: '$lg' } },
      md: { svg: { fontSize: '$lg' } },
      lg: { svg: { fontSize: '$xl' } },
      xl: { svg: { fontSize: '$xl' } },
    },
  },
})
