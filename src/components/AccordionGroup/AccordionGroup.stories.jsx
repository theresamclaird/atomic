import React from 'react';
import { AccordionGroup } from './AccordionGroup';
import { Accordion } from '../Accordion';
import { Text } from '..';

export default {
  title: 'Components/AccordionGroup',
  component: AccordionGroup,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function AccordionGroupTemplate(args) {
  return (
    <AccordionGroup {...args}>
      <Accordion
        label={<Text>Why did the React Component have great self-esteem?</Text>}
        sx={{ paddingTop: '1rem' }}
      >
        <Text sx={{ fontStyle: 'italic' }}>Because its parent kept giving it props.</Text>
      </Accordion>
      <Accordion
        label={<Text>Why did the React Component not understand the joke?</Text>}
        sx={{ paddingTop: '1rem', borderTop: 'solid 1px #ccc' }}
      >
        <Text sx={{ fontStyle: 'italic' }}>Because it did not get the context.</Text>
      </Accordion>
      <Accordion
        label={<Text>What did the functional component say to the class component?</Text>}
        sx={{ paddingTop: '1rem', borderTop: 'solid 1px #ccc' }}
      >
        <Text sx={{ fontStyle: 'italic' }}>You are off the hook!</Text>
      </Accordion>
    </AccordionGroup>
  );
}

export const Default = AccordionGroupTemplate.bind({});
Default.args = {
  sx: {
    margin: '1rem',
  },
};
