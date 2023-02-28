import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { defaultTheme } from '../../themes';

function ThemeProvider({ theme: themeOverrides, children }) {
  return (
    <EmotionThemeProvider
      theme={{ ...defaultTheme, ...themeOverrides }}
    >
      {children}
    </EmotionThemeProvider>
  );
}

ThemeProvider.defaultProps = {
  theme: {},
};

ThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeProvider as default };
