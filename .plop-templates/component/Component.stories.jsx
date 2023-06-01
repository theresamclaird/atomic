import React from 'react';
import {{componentName}} from './{{componentName}}';

export default {
  title: 'Components/{{componentName}}',
  component: {{componentName}},
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function Template(args) {
  return <{{componentName}} {...args} />;
}

export const Example = Template.bind({});
Example.args = {};
