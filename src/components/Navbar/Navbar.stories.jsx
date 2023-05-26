import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
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

function MenuLink({ children }) {
  return <Text as="a" href="#">{children}</Text>;
}
MenuLink.propTypes = { children: PropTypes.node.isRequired };

function Template(args) {
  return (
    <Navbar {...args}>
      <HamburgerMenu>
        <MenuLink>McLaird Family</MenuLink>
        <MenuLink>Theresa</MenuLink>
        <MenuLink>Dana</MenuLink>
        <Box
          sx={{
            width: '100%', m: 0, p: 0, borderTop: 'solid 1px #ddd',
          }}
        />
        <MenuLink>Our Photography</MenuLink>
        <MenuLink>Amateur Radio Log</MenuLink>
      </HamburgerMenu>
      <Text>Navbar Title</Text>
      <Text>Navbar Status</Text>
    </Navbar>
  );
}

export const Example = Template.bind({});
Example.args = {};
