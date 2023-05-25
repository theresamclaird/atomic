import React from 'react';

import { Image } from './Image';

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
  alt: 'Theresa and Dana McLaird',
  src: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/mclairds.webp',
  srcSets: ['https://mclairdfamily-images.s3.us-west-2.amazonaws.com/mclairds-300.webp 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/mclairds-600.webp 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/mclairds-900.webp 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/mclairds-1000.webp 1000w'],
  sx: {
    maxWidth: '50%',
    minWidth: '200px',
  },
};
