import { styled } from '@stitches'

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
    fontSize: '22px',
    color: '$mauve11',
  },
})
