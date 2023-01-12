import { keyframes, styled } from '../../styles'

const pulse = keyframes({
  from: { backgroundColor: '$mauve8' },
  to: { backgroundColor: '$mauve9' },
})

const fadeIn = keyframes({
  from: { opacity: 0.2 },
  to: { opacity: 1 },
})

export const SkeletonRoot = styled('div', {
  boxSizing: 'border-box',

  defaultVariants: {
    loaded: false,
    variant: 'text',
  },

  variants: {
    variant: {
      circle: {
        borderRadius: '$pill',
      },
      text: {
        borderRadius: '$base',
        width: '100%',
      },
    },
    loaded: {
      true: {
        animation: `${fadeIn} 1s`,
      },
      false: {
        opacity: 0.5,

        cursor: 'default',
        pointerEvents: 'none',
        userSelect: 'none',

        borderRadius: '$base',
        backgroundColor: '$mauve7',

        animation: `${pulse} 0.8s linear 0s infinite alternate none running`,

        '> *': {
          visibility: 'hidden',
        },
      },
    },
  },
})
