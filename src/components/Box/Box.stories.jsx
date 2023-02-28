import React from 'react';

import { Box } from './Box';
import { Text } from '../Text';

export default {
  title: 'Atomic/Box',
  component: Box,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function UnorderedListTemplate(args) {
  return (
    <Box {...args}>
      <Text as="li">List Item 1</Text>
      <Text as="li">List Item 2</Text>
      <Text as="li">List Item 3</Text>
    </Box>
  );
}
export const ul = UnorderedListTemplate.bind({});
ul.args = {
  as: 'ul',
};

function Template(args) {
  return <Box {...args}>This is a Box with some styling.</Box>;
}
export const example = Template.bind({});
example.args = {
  sx: {
    p: '1rem',
    bg: '#BDB5D5',
  },
};
