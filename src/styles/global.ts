import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0
  },

  "body": {
    backgroundColor: "$gray900",
    color: "$gray100",
    '-webkit-font-smoothing': "antialiased",
  },

  'body, input, textarea, button': {
    fontFamily: '$primary',
    fontSize: '$1',
    fontWeight: 400,
    color: 'black',
  },


});