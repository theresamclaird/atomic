import React from 'react';
import { HoverBox } from './HoverBox';
import { Box } from '../Box';
import { Text } from '../Text';

export default {
  title: 'Atoms/HoverBox',
  component: HoverBox,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function Template(args) {
  return (
    <HoverBox {...args}>
      {mouseEntered => (
        <Box sx={{ p: 'small', bg: mouseEntered ? '#f00' : 'unset' }}>
          <Text>
            This text will change the background color to red on hover.
          </Text>
        </Box>
      )}
    </HoverBox>
  );
}

export const Default = Template.bind({});
Default.args = {};
