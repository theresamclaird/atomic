import React from 'react';
import { Panel } from './Panel';
import { Flex, Text } from '..';

export default {
  title: 'Atoms/Panel',
  component: Panel,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function PageTemplate(args) {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#cdcdcd',
      }}
    >
      <Panel {...args}><Text>I am the first panel.</Text></Panel>
      <Panel {...args}><Text>I am the second panel.</Text></Panel>
      <Panel {...args}><Text>I am the third panel.</Text></Panel>
    </Flex>
  );
}

export const PageStory = PageTemplate.bind({});
PageStory.args = {
  sx: {
    backgroundColor: 'background',
    padding: '1rem',
    borderRadius: '0.5rem',
  },
  children: <Text>I am a Panel.</Text>,
};
