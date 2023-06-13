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

export const Primary = Template.bind({});
Primary.args = {
  onClick: () => {
    global.alert('Primary Button Clicked');
  },
  label: 'Click Me',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  onClick: () => {
    global.alert('Secondary Button Clicked');
  },
  label: 'Click Me',
};
