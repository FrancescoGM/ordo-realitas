import { styled } from '@stitches'

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
    fontSize: '22px',
    color: '$mauve11',
  },
})
