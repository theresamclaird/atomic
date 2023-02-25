import React from 'react';

import { Image } from './Image';
import imageFile from './IMG_0791.png';

export default {
  title: 'Atomic/Image',
  component: Image,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

const Template = (args) => <Image {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  alt: "Theresa and Dana",
  src: imageFile,
  sx: {
    maxWidth: '50%',
    minWidth: '200px',
  },
};