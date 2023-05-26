import React from 'react';
import PropTypes from 'prop-types';
import HamburgerMenu from './HamburgerMenu';
import { Box } from '../Box';
import { Text } from '../Text';

export default {
  title: 'Components/HamburgerMenu',
  component: HamburgerMenu,
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
    <HamburgerMenu {...args}>
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
  );
}

export const Example = Template.bind({});
Example.args = {};
