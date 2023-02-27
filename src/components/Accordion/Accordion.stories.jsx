import React from 'react';
import { Accordion } from './Accordion';
import { Text } from '../Text';

export default {
  title: 'Atomic/Accordion',
  component: Accordion,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

const Template = (args) => (
  <Accordion {...args}>
    <Text>This is content in the Accordion.</Text>
  </Accordion>
);

export const Playground = Template.bind({});
Playground.args = {
  label: <Text as="h3">Accordion Label</Text>,
  expandIcon: '➕',
  collapseIcon: '➖',
};
