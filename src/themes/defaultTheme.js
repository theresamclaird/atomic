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

const theme = {
  colors: {
    primary: '#000',
    background: '#BDB5D5',
  },
  text: {
    default: defaultText,
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