import React from 'react';
import { Box } from './Box';
import { Text } from '..';

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function Template(args) {
  return (
    <Box {...args}>
      <Text>This text is inside a Box.</Text>
    </Box>
  );
}

export const Default = Template.bind({});
Default.args = {};

export const StyledBox = Template.bind({});
StyledBox.args = {
  sx: {
    backgroundColor: '#609',
    border: 'solid 3px #000',
    borderRadius: '0.5rem',
    padding: '1rem',
    margin: '1rem',
    '> p': { color: '#fff' },
  },
};

function ListTemplate(args) {
  return (
    <Box {...args}>
      <Text as="li">First Bullet</Text>
      <Text as="li">Second Bullet</Text>
    </Box>
  );
}

export const UnorderedList = ListTemplate.bind({});
UnorderedList.args = {
  as: 'ul',
};
