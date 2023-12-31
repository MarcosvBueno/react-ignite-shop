import {createStitches} from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      gray900: '#121214',
      gray800: "#202024",
      gray700: "#2b2b30",
      gray500: "#8d8d99",
      gray300: "#c4c4cc",
      gray100: "#e1e1e6",


      green500: "#00875f",
      green300: "#00b37e",
      white: "#fff",
    },

    fonts: {
      primary: 'Roboto, sans-serif'
    },

    fontSizes: {
      md : '1.125',
      lg: '1.25rem',
      xl: '1.5rem',
      "2xl": '2rem',
    }

    
    }
  }
)