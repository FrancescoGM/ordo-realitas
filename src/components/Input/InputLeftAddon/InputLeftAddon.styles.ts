import { styled } from '@stitches-config'

export const InputLeftAddonRoot = styled('span', {
  position: 'absolute',
  height: '100%',
  width: '38px',
  top: '50%',
  left: 0,
  transform: 'translateY(-50%)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',

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
