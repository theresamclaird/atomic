import React from 'react';
import Panel from './Panel';
import { Text, Flex } from '..';

export default {
  title: 'Components/Panel',
  component: Panel,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function Template() {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Panel>
        <Text sx={{ p: 'small' }}>This is a panel.</Text>
      </Panel>
      <Panel>
        <Text sx={{ p: 'small' }}>This is another panel.</Text>
      </Panel>
      <Panel>
        <Text sx={{ p: 'small' }}>A Panel contains content and provides standardized widths and gutters.</Text>
      </Panel>
    </Flex>
  );
}

export const Example = Template.bind({});

Example.parameters = {
  backgrounds: { default: 'dark' },
};
