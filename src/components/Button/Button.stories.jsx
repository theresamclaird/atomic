import React from 'react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function Template(args) {
  return <Button {...args} />;
}

export const Example = Template.bind({});
Example.args = {
  onClick: () => {
    global.alert('Button Clicked');
  },
  label: 'Click Me',
};
