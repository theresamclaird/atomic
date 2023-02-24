import React from 'react';

import { Box } from './Box';

export default {
  title: 'Atomic/Box',
  component: Box,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

const Template = (args) => <Box {...args}>This is a Box with some styling.</Box>;

export const Playground = Template.bind({});
Playground.args = {
  sx: {
    p: '1rem',
    bg: '#800080',
    color: '#fff',
  }
};