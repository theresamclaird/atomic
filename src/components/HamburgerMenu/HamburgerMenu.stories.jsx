import React from 'react';
import { HamburgerMenu } from './HamburgerMenu';
import { Box } from '../Box';
import { Text } from '../Text';

export default {
  title: 'Atoms/HamburgerMenu',
  component: HamburgerMenu,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function Template(args) {
  return (
    <Box sx={{ height: '300px' }}>
      <HamburgerMenu {...args}>
        <Text as="a" href="#">Menu Link 1</Text>
        <Text as="a" href="#">Menu Link 2</Text>
        <Text as="a" href="#">Menu Link 3</Text>
        <Box
          sx={{
            width: '100%', m: 0, p: 0, borderTop: 'solid 1px #ddd',
          }}
        />
        <Text as="a" href="#">Menu Link 4</Text>
        <Text as="a" href="#">Menu Link 5</Text>
        <Text as="a" href="#">Menu Link 6</Text>
      </HamburgerMenu>
    </Box>
  );
}

export const Default = Template.bind({});
Default.args = {};
