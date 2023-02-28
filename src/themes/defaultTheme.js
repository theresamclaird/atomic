const fontFamily = 'Arial, Helvetica, sans-serif';
const fontWeight = {
  normal: '400',
  bold: '600',
};

const defaultText = {
  fontFamily,
  fontSize: '1rem',
  fontWeight: fontWeight.normal,
  color: 'primary',
  m: 0,
  padding: 0,
};

const breakpoints = ['393px', '768px', '1280px'];

const space = [0, '1rem', '2rem', '3rem'];
space.none = space[0];
space.small = space[1];
space.medium = space[2];
space.large = space[3];

const theme = {
  breakpoints,
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
  },
  space,
  colors: {
    primary: '#000',
    background: '#BDB5D5',
    anchor: '#562cac',
  },
  text: {
    default: defaultText,
    a: {
      ...defaultText,
      textDecoration: 'none',
      color: 'anchor',
      ':hover': {
        textDecoration: 'underline',
      }
    },
    p: defaultText,
    h1: {
      ...defaultText,
      fontSize: '2rem',
      fontWeight: fontWeight.bold,
    },
    h2: {
      ...defaultText,
      fontSize: '1.5rem',
      fontWeight: fontWeight.bold,
    },
    h3: {
      ...defaultText,
      fontWeight: fontWeight.bold,
    },
  },
};

export { theme as defaultTheme, theme as default };