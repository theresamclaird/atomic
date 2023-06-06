import React from 'react';
import { Accordion } from './Accordion';
import { Text } from '..';

export default {
  title: 'Atoms/Accordion',
  component: Accordion,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function AccordionTemplate(args) {
  return (
    <Accordion {...args}>
      <Text sx={{ fontStyle: 'italic' }}>Because OCT 31 equals DEC 25.</Text>
    </Accordion>
  );
}

export const Default = AccordionTemplate.bind({});
Default.args = {
  label: <Text>Why do programmers confuse Halloween and Christmas?</Text>,
  sx: { m: '1rem', paddingTop: '1rem' },
};
