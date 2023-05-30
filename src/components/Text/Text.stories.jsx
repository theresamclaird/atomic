import React from 'react';
import { Text } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function TextTemplate(args) {
  return <Text {...args}>This is a text component.</Text>;
}

export const Default = TextTemplate.bind({});
Default.args = {};

export const StyledText = TextTemplate.bind({});
StyledText.args = {
  sx: {
    backgroundColor: '#609',
    color: '#fff',
    borderRadius: '0.5rem',
    padding: '1rem',
    margin: '1rem',
  },
};

function AnchorTemplate(args) {
  return <Text {...args}>This is an Anchor.</Text>;
}

export const AnchorText = AnchorTemplate.bind({});
AnchorText.args = {
  as: 'a',
  href: 'https://www.atomiccomponentlibrary.com/',
  target: '_blank',
};
