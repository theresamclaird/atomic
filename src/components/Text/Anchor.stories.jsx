import React from 'react';
import { Text } from './Text';
import { Anchor } from './Anchor';

export default {
  title: 'Atoms/Anchor',
  component: Anchor,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function AnchorTemplate(args) {
  return (
    <Text sx={{ margin: '1rem', padding: '1rem' }}>
      This text contains a link to{' '}
      <Anchor {...args}>atomiccomponentlibrary.com</Anchor>.
    </Text>
  );
}

export const Default = AnchorTemplate.bind({});
Default.args = {
  href: 'https://www.atomiccomponentlibrary.com/',
};

export const StyledAnchor = AnchorTemplate.bind({});
StyledAnchor.args = {
  ...Default.args,
  sx: {
    backgroundColor: '#bdb5d5',
    color: '#000',
    ':hover': {
      backgroundColor: '#609',
      color: '#fff',
    },
  },
};
