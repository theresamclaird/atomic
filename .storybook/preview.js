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
  options: {
    storySort: {
      order: [
        'Components', ['Box', 'Flex', 'Grid', 'Text', 'Anchor', 'Button', 'Panel', 'Image', 'Hero', 'PlayingCard', 'Accordion', 'AccordionGroup', 'HamburgerMenu', 'Navbar', 'HoverBox'],
        'Hooks',
        'Modules',
      ],
    },
  },
}