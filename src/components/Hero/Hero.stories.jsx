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
    <Text sx={{ mt: '2rem' }}>We are engineers living happily in the Pacific Northwest. Our interests include technology, puzzles, hiking, photography, amateur radio, and music.</Text>
  </Hero>
);

export const Playground = Template.bind({});
Playground.args = {
  src: imageFile,
  alt: "Theresa & Dana",
};

Playground.parameters = {
  backgrounds: { default: '#f00' },
};