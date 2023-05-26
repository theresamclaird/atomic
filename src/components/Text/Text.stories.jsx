import React from 'react';

import { Text } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function Template(args) {
  return <Text {...args} />;
}

export const Anchor = Template.bind({});
Anchor.args = {
  as: 'a',
  href: 'https://www.theresamclaird.com/',
  children: 'This is link text.',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  children: 'This is paragraph text.',
};

export const Heading1 = Template.bind({});
Heading1.args = {
  as: 'h1',
  children: 'This is an h1 heading.',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  as: 'h2',
  children: 'This is an h2 heading.',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  as: 'h3',
  children: 'This is an h3 heading.',
};
