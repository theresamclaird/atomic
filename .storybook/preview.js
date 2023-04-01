import React from 'react';
import { ThemeProvider } from '../src/components/ThemeProvider';

export const decorators = [
  Story => (
    <ThemeProvider><Story /></ThemeProvider>
  ),
];

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}