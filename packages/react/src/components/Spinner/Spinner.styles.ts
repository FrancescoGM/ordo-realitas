import { keyframes, styled, theme } from '../../styles'

const spinnerAnimation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

export const SpinnerRoot = styled('div', {
  display: 'inline-block',
  boxSizing: 'border-box',

  borderStyle: 'solid',
  borderWidth: '$mid',
  borderTopColor: '$mauve12',
  borderRightColor: '$mauve12',
  borderBottomColor: 'transparent',
  borderLeftColor: 'transparent',

  borderRadius: `$pill`,
  animation: `${spinnerAnimation} 0.45s linear infinite`,

  variants: {
    colorScheme: {
      white: { borderTopColor: '$mauve12', borderRightColor: '$mauve12' },
      violet: { borderTopColor: '$violet9', borderRightColor: '$violet9' },
      green: { borderTopColor: '$grass9', borderRightColor: '$grass9' },
      red: { borderTopColor: '$tomato9', borderRightColor: '$tomato9' },
    },
    size: {
      sm: {
        width: theme.fontSizes.sm,
        height: theme.fontSizes.sm,
      },
      md: {
        width: theme.fontSizes.md,
        height: theme.fontSizes.md,
      },
      lg: {
        width: theme.fontSizes.lg,
        height: theme.fontSizes.lg,
      },
      xl: {
        width: theme.fontSizes.xl,
        height: theme.fontSizes.xl,
      },
    },
  },
})
