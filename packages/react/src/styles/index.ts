import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fontSizes,
  fonts,
  fontWeights,
  lineHeights,
  radii,
  space,
} from "@ecosystem/tokens"

export const {
  css,
  getCssText,
  globalCss,
  styled,
  theme,
  config,
  createTheme,
  keyframes,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
  },
})