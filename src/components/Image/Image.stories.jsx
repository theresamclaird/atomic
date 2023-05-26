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
  alt: 'Llama Cria',
  src: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-1200x742.png',
  sources: [
    { srcset: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-300x185.webp 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-600x371.webp 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-900x556.webp 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-1200x742.webp 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-2400x1483.webp 2400w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-3600x2225.webp 3600w' },
    { srcset: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-300x185.jpg 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-600x371.jpg 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-900x556.jpg 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-1200x742.jpg 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-2400x1483.jpg 2400w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-3600x2225.jpg 3600w' },
  ],
};
