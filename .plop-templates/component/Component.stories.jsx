import React from 'react';
import {{componentName}} from '.';

export default {
  title: 'Atomic/{{componentName}}',
  component: {{componentName}},
  argTypes: {
    sx: { table: { disable: true } },
  },
};

const Template = (args) => <{{componentName}} {...args} />;

export const example = Template.bind({});
example.args = {};
