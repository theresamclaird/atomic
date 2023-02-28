import React from 'react';
import { AccordionGroup } from './AccordionGroup';
import { Accordion } from '../Accordion';
import { Text } from '../Text';

export default {
  title: 'Atomic/AccordionGroup',
  component: AccordionGroup,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

const Template = (args) => (
  <AccordionGroup {...args}>
    <Accordion
      label={<Text as="h3">Lorem Ipsum</Text>}
    >
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus magna urna, sit amet dapibus nisi vehicula quis. Nullam non velit at purus ornare viverra at ut nisl. Donec quis dapibus massa, non venenatis ipsum. Sed lacus quam, scelerisque ut tempor sit amet, congue in est. Vivamus faucibus lacus et sapien posuere imperdiet. Praesent pretium mattis dolor at interdum. Nullam neque diam, dignissim nec pharetra vitae, tincidunt non ex. Cras id lacus ligula. Sed volutpat, felis id semper efficitur, tortor magna sollicitudin ex, in consectetur nisl erat venenatis nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse ut odio sit amet ex consectetur tincidunt quis maximus sem. Suspendisse ac dolor id justo finibus posuere congue eget nunc. Nullam accumsan efficitur interdum. Aliquam ultricies ligula eget ligula sodales, eget dapibus quam dapibus. Quisque vitae ornare mi.</Text>
    </Accordion>
    <Accordion
      label={<Text as="h3">Quisque</Text>}
      >
      <Text>Quisque in elit quis sapien tincidunt convallis et ac lacus. In ligula nibh, aliquam sit amet imperdiet aliquam, consectetur sit amet nisl. Fusce efficitur eget nulla quis cursus. Nam metus quam, rhoncus ut tincidunt et, tincidunt vel dui. Cras congue turpis justo, nec iaculis erat aliquam eu. Sed suscipit non ipsum quis laoreet. Nunc elementum sagittis risus, at pretium tortor tempor eget. Ut vel pellentesque velit, at sollicitudin tellus. Duis tincidunt gravida dolor id consectetur. Pellentesque diam magna, consectetur vel ornare cursus, lacinia vel dui.</Text>
    </Accordion>
    <Accordion
      label={<Text as="h3">Ut convallis enim dolor</Text>}
      >
      <Text>Ut convallis enim dolor, eget accumsan nibh viverra eget. In hendrerit ipsum sit amet nunc vestibulum, quis auctor magna interdum. Duis venenatis arcu at ex convallis, in dictum est pharetra. Nullam malesuada et lorem a accumsan. Pellentesque rhoncus, tortor ac cursus venenatis, quam velit maximus quam, eget accumsan risus magna nec magna. Duis vel massa libero. Curabitur suscipit a augue ut mattis. Etiam luctus mattis vehicula. Mauris luctus semper mauris, a congue quam euismod sit amet. Donec consequat mi ex, vel ornare erat dictum non. In commodo massa nec lorem venenatis, ut vulputate dolor sagittis. Pellentesque ultricies, mi sed vestibulum ornare, libero ex dapibus dolor, id auctor nulla nulla vel felis.</Text>
    </Accordion>
  </AccordionGroup>
);

export const example = Template.bind({});
example.args = {};
