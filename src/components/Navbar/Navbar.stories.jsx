import React from 'react';
import { Navbar } from './Navbar';
import { Box } from '../Box';
import { Text } from '../Text';
import { HamburgerMenu } from '../HamburgerMenu';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function Template(args) {
  return (
    <Box sx={{ height: '300px', backgroundColor: 'background' }}>
      <Navbar {...args}>
        <HamburgerMenu>
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
        <Text sx={{ fontWeight: 900 }}>Navbar Title</Text>
        <Text>Score: ∞</Text>
      </Navbar>
    </Box>
  );
}

export const Default = Template.bind({});
Default.args = {};
