/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { Box } from '../Box';
import { Text } from './Text';

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function TextTemplate(args) {
  return (
    <Text {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec massa sit amet tortor
      pharetra scelerisque. Nunc vitae turpis eu lectus lacinia tempor. Suspendisse mattis lectus id
      justo egestas ultricies.
    </Text>
  );
}

export const Default = TextTemplate.bind({});
Default.args = {};

function HeadingTemplate({ children, ...args }) {
  return <Text {...args}>{children}</Text>;
}

export const Heading1 = HeadingTemplate.bind({});
Heading1.args = { children: 'This is an h1.', as: 'h1' };

export const Heading2 = HeadingTemplate.bind({});
Heading2.args = { children: 'This is an h2.', as: 'h2' };

export const Heading3 = HeadingTemplate.bind({});
Heading3.args = { children: 'This is an h3.', as: 'h3' };

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
