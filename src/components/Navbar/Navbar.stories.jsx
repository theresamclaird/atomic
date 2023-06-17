import React from 'react';
import { Navbar } from './Navbar';
import { Box } from '../Box';
import { Text } from '../Text';
import { HamburgerMenu } from '../HamburgerMenu';

export default {
  title: 'Molecules/Navbar',
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
          <Text as="a" href="#">
            Menu Link 1
          </Text>
          <Text as="a" href="#">
            Menu Link 2
          </Text>
          <Text as="a" href="#">
            Menu Link 3
          </Text>
          <Box
            sx={{
              width: '100%',
              m: 0,
              p: 0,
              borderTop: 'solid 1px #ddd',
            }}
          />
          <Text as="a" href="#">
            Menu Link 4
          </Text>
          <Text as="a" href="#">
            Menu Link 5
          </Text>
          <Text as="a" href="#">
            Menu Link 6
          </Text>
        </HamburgerMenu>
        <Text sx={{ fontWeight: 900 }}>Navbar Title</Text>
        <Text>Score: ∞</Text>
      </Navbar>
    </Box>
  );
}

export const Default = Template.bind({});
Default.args = {};
