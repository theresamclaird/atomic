import React from 'react';
import { Hero } from './Hero';
import { Text } from '../Text';

import imageFile from './IMG_0791.png';

export default {
  title: 'Atomic/Hero',
  component: Hero,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

const Template = (args) => (
  <Hero {...args}>
  <Text as="h1">Theresa &amp; Dana</Text>
    <Text sx={{ mt: ['small', 'medium'] }}>We are engineers living happily in the Pacific Northwest. Our interests include technology, puzzles, hiking, photography, amateur radio, and music.</Text>
  </Hero>
);

export const example = Template.bind({});
example.args = {
  src: imageFile,
  alt: "Theresa & Dana",
  sx: {
    width: '600px',
  },
};

example.parameters = {
  backgrounds: { default: 'dark' },
};