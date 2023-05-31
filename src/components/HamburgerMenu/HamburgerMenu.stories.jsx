import React from 'react';
import { HamburgerMenu } from './HamburgerMenu';
import { Box } from '../Box';
import { Text } from '../Text';

export default {
  title: 'Components/HamburgerMenu',
  component: HamburgerMenu,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function Template(args) {
  return (
    <Box sx={{ height: '300px', backgroundColor: 'background' }}>
      <HamburgerMenu {...args}>
        <Text as="a" href="#">McLaird Family</Text>
        <Text as="a" href="#">Theresa</Text>
        <Text as="a" href="#">Dana</Text>
        <Box
          sx={{
            width: '100%', m: 0, p: 0, borderTop: 'solid 1px #ddd',
          }}
        />
        <Text as="a" href="#">Photography</Text>
        <Text as="a" href="#">Amateur Radio Log</Text>
        <Text as="a" href="#">Atomic Component Library</Text>
      </HamburgerMenu>
    </Box>
  );
}

export const Default = Template.bind({});
Default.args = {};
