import { keyframes, styled, theme } from '../../../stitches.config'

const spinnerAnimation = keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
})

export const SpinnerWrapper = styled('div', {
  display: 'inline-block',

  borderStyle: 'solid',
  borderWidth: '$mid',
  borderTopColor: '$mauve12',
  borderRightColor: '$mauve12',
  borderBottomColor: 'transparent',
  borderLeftColor: 'transparent',

  borderRadius: `$pill`,
  animation: `${spinnerAnimation} 0.45s linear infinite`,

  variants: {
    size: {
      sm: {
        width: theme.fontSizes.sm,
        height: theme.fontSizes.sm
      },
      md: {
        width: theme.fontSizes.md,
        height: theme.fontSizes.md
      },
      lg: {
        width: theme.fontSizes.lg,
        height: theme.fontSizes.lg
      },
      xl: {
        width: theme.fontSizes.xl,
        height: theme.fontSizes.xl
      }
    }
  }
})
