import React from 'react';

import { Text } from './Text';

export default {
  title: 'Atomic/Text',
  component: Text,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

const Template = (args) => <Text {...args} />;

export const p = Template.bind({});
p.args = {
  children: 'This is paragraph text.',
};

export const h1 = Template.bind({});
h1.args = {
  as: 'h1',
  children: 'This is an h1 heading.',
};

export const h2 = Template.bind({});
h2.args = {
  as: 'h2',
  children: 'This is an h2 heading.',
};

export const h3 = Template.bind({});
h3.args = {
  as: 'h3',
  children: 'This is an h3 heading.',
};