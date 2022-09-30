import { keyframes, styled } from '@stitches'

const animation = keyframes({
  '0%': {
    backgroundColor: '$mauve3',
  },
  '100%': {
    backgroundColor: '$mauve5',
  },
})

export const SkeletonRoot = styled('div', {
  width: '100%',
  display: 'block',
  backgroundColor: '$mauve3',
  animation: `${animation} 750ms infinite alternate`,

  defaultVariants: {
    size: 'md',
    variant: 'text',
  },

  variants: {
    size: {
      sm: { width: '$2', height: '$2' },
      md: { width: '$4', height: '$4' },
      lg: { width: '$8', height: '$$8' },
      xl: { width: '$12', height: '$$12' },
      '2xl': { width: '$20 ', height: '$20 ' },
      '3xl': { width: '$40', height: '$40' },
    },
    variant: {
      circle: {
        borderRadius: '$pill',
      },
      text: {
        borderRadius: '$base',
        width: '100%',
      },
    },
  },
})
