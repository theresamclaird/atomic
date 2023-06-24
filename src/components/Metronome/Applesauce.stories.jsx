import React from 'react';
import Applesauce from './Applesauce';

export default {
  title: 'Atoms/Applesauce',
  component: Applesauce,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function Template(args) {
  return <Applesauce {...args} />;
}

export const Metronome = Template.bind({});
Metronome.args = {};
