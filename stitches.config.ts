import {
  violet,
  mauve,
  grass,
  tomato,
  amber,
  mauveDark,
  grassDark,
  violetDark,
  tomatoDark,
  amberDark
} from '@radix-ui/colors'
import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      ...violet,
      ...grass,
      ...mauve,
      ...tomato,
      ...amber
    },
    shadows: {
      outlined: '0 0 0 4px $colors$mauve1, 0 0 0 6px $colors$mauve12'
    },
    fonts: {
      default: '"Roboto", sans-serif',
      highlight: '"Roboto Condensed", sans-serif'
    },
    fontWeights: {
      normal: '400',
      medium: '500',
      bold: '700'
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '3rem',
      '4xl': '4rem'
    },
    lineHeights: {
      shorter: '120%',
      short: '140%',
      tall: '160%',
      taller: '180%'
    },
    radii: {
      base: '5px',
      medium: '12px',
      pill: '99999px'
    },
    borderWidths: {
      thin: '1px',
      mid: '2px',
      thick: '4px'
    },
    space: {
      '0': '0rem',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '40': '10rem'
    },
    zIndices: {
      header: '100'
    }
  },
  media: {
    sm: '(max-width: 30em)',
    md: '(max-width: 38em)',
    lg: '(max-width: 62em)',
    xl: '(max-width: 80em)'
  }
})

export const darkTheme = createTheme({
  colors: {
    ...mauveDark,
    ...grassDark,
    ...violetDark,
    ...tomatoDark,
    ...amberDark
  },
  shadows: {
    $$mauve1: '$colors$mauve1',
    $$mauve12: '$colors$mauve12',
    outlined: '0 0 0 4px $colors$mauve1, 0 0 0 6px $colors$mauve12'
  }
})
