import { styled } from '../../styles'

export const ProgressBarRoot = styled('div', {
  position: 'relative',
  display: 'inline-flex',

  borderRadius: '$pill',
  height: '$4',
  width: '100%',
  backgroundColor: '$mauve5',

  '&::before': {
    content: 'attr(data-value)',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
})

export const ProgressBarIndicator = styled('div', {
  display: 'block',
  height: 'inherit',
  borderRadius: '$pill',

  defaultVariants: {
    colorScheme: 'red',
  },

  variants: {
    colorScheme: {
      red: { backgroundColor: '$tomato9' },
      blue: { backgroundColor: '$blue9' },
    },
    overflow: {
      true: {
        borderRadius: '$pill 0 0 $pill',
      },
    },
  },
})

export const ProgressBarOverflowIndicator = styled('div', {
  display: 'block',
  height: 'inherit',
  borderRadius: '0 $pill $pill 0',

  defaultVariants: {
    colorScheme: 'red',
  },

  variants: {
    colorScheme: {
      red: { backgroundColor: '$tomato7' },
      blue: { backgroundColor: '$blue7' },
    },
  },
})
