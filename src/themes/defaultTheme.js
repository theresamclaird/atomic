const fontFamily = 'Arial, Helvetica, sans-serif';
const fontWeight = {
  normal: '400',
  bold: '600',
};

const theme = {
  colors: {
    primary: '#000',
    background: '#BDB5D5',
  },
  text: {
    default: {
      fontFamily,
      fontSize: '1rem',
      fontWeight: 'normal',
      color: 'primary',
    },
    p: {
      fontFamily,
      fontSize: '1rem',
      fontWeight: 'normal',
      color: 'primary',
    },
    h1: {
      fontFamily,
      fontSize: '2rem',
      fontWeight: 'bold',
      color: 'primary',
    },
    h2: {
      fontFamily,
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: 'primary',
    },
    h3: {
      fontFamily,
      fontSize: '1rem',
      fontWeight: 'bold',
      color: 'primary',
    },
  },
};

export { theme as defaultTheme, theme as default };