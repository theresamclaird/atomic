import React from 'react';
import { Box } from '../Box';
import { Text } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function TextTemplate(args) {
  return <Text {...args}>This is a text component.</Text>;
}

export const Default = TextTemplate.bind({});
Default.args = {};

export const StyledText = TextTemplate.bind({});
StyledText.args = {
  sx: {
    backgroundColor: '#609',
    color: '#fff',
    borderRadius: '0.5rem',
    padding: '1rem',
    margin: '1rem',
  },
};

function OrderedListTemplate(args) {
  return (
    <Box as="ol">
      <Text {...args}>First Bullet</Text>
      <Text {...args}>Second Bullet</Text>
      <Text {...args}>Third Bullet</Text>
    </Box>
  );
}

export const OrderedList = OrderedListTemplate.bind({});
OrderedList.args = {
  as: 'li',
};
