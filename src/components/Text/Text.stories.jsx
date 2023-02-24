import React from 'react';

import { Text } from './Text';

export default {
  title: 'Atomic/Text',
  component: Text,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

const Template = (args) => <Text {...args}>This is text as h1 with some styling.</Text>;

export const Playground = Template.bind({});
Playground.args = {
  as: 'h1',
  sx: {
    p: '1rem',
    bg: '#008000',
    color: '#fff',
  }
};