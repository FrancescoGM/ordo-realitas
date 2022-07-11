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
      'primaryColor-light': '#996DFF',
      'primaryColor-mid': '#633BBC',
      'primaryColor-dark': '#271A45',

      'secondaryColor-light': '#ED8936',
      'secondaryColor-mid': '#DD6B20',
      'secondaryColor-dark': '#C05621',

      'neutralColor-100': '#F2F2FA',
      'neutralColor-200': '#E1E1E6',
      'neutralColor-300': '#A8A8B3',
      'neutralColor-400': '#8D8D8C',
      'neutralColor-500': '#687076',
      'neutralColor-600': '#454545',
      'neutralColor-700': '#29292E',
      'neutralColor-800': '#202024',
      'neutralColor-900': '#121214',

      'semanticColor-positive': '#04D361',
      'semanticColor-negative': '#FF5343',
      'semanticColor-warning': '#EB8A1D',

      black: '#000000',
      white: '#FFFFFF'
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
    shadows: {
      'text-red': '0px 0px 10px #FF230F',
      'text-blue': '0px 0px 10px #0766D3',
      'text-yellow': '0px 0px 10px #FFBC4F',
      red: '0px 10px 10px #FF230F',
      blue: '0px 0px 10px 10px #0766D3',
      yellow: '0px 0px 10px 10px #FFBC4F'
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
