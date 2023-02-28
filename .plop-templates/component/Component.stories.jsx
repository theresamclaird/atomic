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

export const Default = Template.bind({});
Default.args = {};
