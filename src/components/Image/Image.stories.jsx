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

function Template(args) {
  return <Image {...args} />;
}

export const Example = Template.bind({});
Example.args = {
  alt: 'Theresa and Dana',
  src: imageFile,
  sx: {
    maxWidth: '50%',
    minWidth: '200px',
  },
};
