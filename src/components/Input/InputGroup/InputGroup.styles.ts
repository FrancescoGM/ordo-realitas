import { styled } from '@stitches'

export const InputGroupRoot = styled('div', {
  position: 'relative',
  width: 'inherit',

  variants: {
    leftIcon: {
      true: {
        input: {
          paddingLeft: '$10',
        },
      },
    },
    rightIcon: {
      true: {
        input: {
          paddingRight: '$10',
        },
      },
    },
  },
})
