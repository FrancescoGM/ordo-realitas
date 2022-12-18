import { styled } from '@stitches-config'

export const InputRoot = styled('input', {
  width: 'inherit',
  padding: '$2 $4',
  borderRadius: '$base',
  background: '$mauve2',
  borderColor: '$mauve4',
  borderStyle: 'solid',
  borderWidth: '$mid',
  outline: 'none',
  transition: 'border-color 0.2s',

  '&:focus': {
    borderColor: '$violet9',
  },
})
