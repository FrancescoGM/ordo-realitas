import { styled } from '@stitches'

export const DividerRoot = styled('hr', {
  borderColor: '$mauve10',

  defaultVariants: {
    orientation: 'horizontal'
  },

  variants: {
    orientation: {
      vertical: {
        height: '100%'
      },
      horizontal: {
        width: '100%'
      }
    }
  }
})
