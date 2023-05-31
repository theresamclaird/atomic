import React from 'react';
import { Flex } from './Flex';
import { Text } from '..';

export default {
  title: 'Components/Flex',
  component: Flex,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function FlexTemplate(args) {
  return (
    <Flex {...args}>
      <Text>First Element</Text>
      <Text>Second Element</Text>
      <Text>Third Element</Text>
    </Flex>
  );
}

export const FlexBox = FlexTemplate.bind({});
FlexBox.args = {
  direction: 'row',
  justify: 'space-between',
  wrap: 'nowrap',
  align: 'flex-start',
  gap: '1rem',
  sx: {
    margin: '1rem',
    '> p': {
      backgroundColor: '#609',
      color: '#fff',
      borderRadius: '0.5rem',
      padding: '1rem',
    },
  },
};
