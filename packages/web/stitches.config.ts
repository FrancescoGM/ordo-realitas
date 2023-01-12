import {
  darkColors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  media,
  radii,
  shadows,
  sizes,
  space,
  utils,
  zIndices,
} from '@ordo-realitas/tokens'
import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: darkColors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    sizes,
    radii,
    shadows,
    space,
    zIndices,
  },
  media,
  utils,
})

export type Theme = typeof theme
