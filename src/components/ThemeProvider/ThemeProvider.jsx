import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { defaultTheme } from '../../themes';

const ThemeProvider = ({ theme: themeOverrides, children }) => (
  <EmotionThemeProvider theme={{ ...defaultTheme, ...themeOverrides }}>{children}</EmotionThemeProvider>
);

ThemeProvider.defaultProps = {
  theme: {},
};

ThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeProvider as default };