import React from 'react';

import { Text } from './Text';

export default {
  title: 'Atomic/Text',
  component: Text,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function Template(args) {
  return <Text {...args} />;
}

export const anchor = Template.bind({});
anchor.args = {
  as: 'a',
  href: 'https://www.theresamclaird.com/',
  children: 'This is link text.',
};

export const paragraph = Template.bind({});
paragraph.args = {
  children: 'This is paragraph text.',
};

export const heading1 = Template.bind({});
heading1.args = {
  as: 'h1',
  children: 'This is an h1 heading.',
};

export const heading2 = Template.bind({});
heading2.args = {
  as: 'h2',
  children: 'This is an h2 heading.',
};

export const heading3 = Template.bind({});
heading3.args = {
  as: 'h3',
  children: 'This is an h3 heading.',
};
