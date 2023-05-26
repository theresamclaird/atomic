import React from 'react';
import { Accordion } from './Accordion';
import { Text } from '../Text';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function Template(args) {
  return (
    <Accordion {...args}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus magna urna, sit
        amet dapibus nisi vehicula quis. Nullam non velit at purus ornare viverra at ut nisl. Donec
        quis dapibus massa, non venenatis ipsum. Sed lacus quam, scelerisque ut tempor sit amet,
        congue in est. Vivamus faucibus lacus et sapien posuere imperdiet. Praesent pretium mattis
        dolor at interdum. Nullam neque diam, dignissim nec pharetra vitae, tincidunt non ex. Cras
        id lacus ligula. Sed volutpat, felis id semper efficitur, tortor magna sollicitudin ex, in
        consectetur nisl erat venenatis nibh. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Suspendisse ut odio sit amet ex consectetur
        tincidunt quis maximus sem. Suspendisse ac dolor id justo finibus posuere congue eget nunc.
        Nullam accumsan efficitur interdum. Aliquam ultricies ligula eget ligula sodales, eget
        dapibus quam dapibus. Quisque vitae ornare mi.
      </Text>
    </Accordion>
  );
}

export const Example = Template.bind({});
Example.args = {
  label: <Text as="h3">Lorem Ipsum</Text>,
};
