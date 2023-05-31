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

function BoxTemplate(args) {
  return <Box {...args} />;
}

export const Default = BoxTemplate.bind({});
Default.args = {
  children: <Text>This is a default Box.</Text>,
};

export const StyledBox = BoxTemplate.bind({});
StyledBox.args = {
  children: <Text>This Box is styled using the sx prop.</Text>,
  sx: {
    backgroundColor: '#609',
    border: 'solid 3px #000',
    borderRadius: '0.5rem',
    padding: '1rem',
    margin: '1rem',
    '> p': { color: '#fff' },
  },
};

export const UnorderedList = BoxTemplate.bind({});
UnorderedList.args = {
  children: [
    <Text as="li">First Bullet</Text>,
    <Text as="li">Second Bullet</Text>,
  ],
  as: 'ul',
};
