import { styled } from '../../styles'

export const DividerRoot = styled('hr', {
  opacity: 0.6,

  borderImage: 'initial',
  borderColor: '$mauve10',
  borderStyle: 'solid',

  boxSizing: 'content-box',
  overflow: 'visible',

  defaultVariants: {
    orientation: 'horizontal',
  },

  variants: {
    orientation: {
      vertical: {
        height: '100%',
        borderWidth: '0px 0px 0px 1px',
      },
      horizontal: {
        width: '100%',
        borderWidth: '1px 0px 0px 0px',
      },
    },
  },
})
