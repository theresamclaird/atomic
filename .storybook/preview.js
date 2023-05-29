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
        'Documentation', ['Getting Started', 'Default Theme', 'Contact Me'],
        'Components', ['Box', 'Flex', 'Text', 'Panel', 'Image', 'Hero', 'Accordion', 'AccordionGroup', 'HamburgerMenu', 'Navbar', 'HoverBox', 'PlayingCard'],
        'Hooks',
      ],
    },
  },
}