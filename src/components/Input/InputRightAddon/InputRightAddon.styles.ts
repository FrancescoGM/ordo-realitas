import { styled } from '@stitches-config'

export const InputRightAddonRoot = styled('span', {
  position: 'absolute',
  height: '$8',
  width: '38px',
  top: '50%',
  right: 0,
  transform: 'translateY(-50%)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

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
