import React from 'react';
import { AccordionGroup } from './AccordionGroup';
import { Accordion } from '../Accordion';
import { Text } from '..';

export default {
  title: 'Molecules/AccordionGroup',
  component: AccordionGroup,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function AccordionGroupTemplate(args) {
  return (
    <AccordionGroup {...args} sx={{ m: 1 }}>
      <Accordion
        label={<Text>Why did the React Component have great self-esteem?</Text>}
        sx={{ paddingTop: '1rem' }}
      >
        <Text sx={{ fontStyle: 'italic' }}>
          Because its parent kept giving it props.
        </Text>
      </Accordion>
      <Accordion
        label={
          <Text>Why did the React Component not understand the joke?</Text>
        }
        sx={{ paddingTop: '1rem', borderTop: 'solid 1px #ccc' }}
      >
        <Text sx={{ fontStyle: 'italic' }}>
          Because it did not get the context.
        </Text>
      </Accordion>
      <Accordion
        label={<Text>How do you comfort a JavaScript bug?</Text>}
        sx={{ paddingTop: '1rem', borderTop: 'solid 1px #ccc' }}
      >
        <Text sx={{ fontStyle: 'italic' }}>You console it.</Text>
      </Accordion>
    </AccordionGroup>
  );
}

export const Default = AccordionGroupTemplate.bind({});
Default.args = {};

export const ExpandOneAtATime = AccordionGroupTemplate.bind({});
ExpandOneAtATime.args = {
  reducer: (state, action) =>
    state.map((value, index) => (index === action.index ? !value : false)),
};
