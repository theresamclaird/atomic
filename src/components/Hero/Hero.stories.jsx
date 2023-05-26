import React from 'react';
import { Hero } from './Hero';
import { Text } from '../Text';

export default {
  title: 'Components/Hero',
  component: Hero,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function Template(args) {
  return (
    <Hero {...args}>
      <Text as="h1">Lorem Ipsum</Text>
      <Text sx={{ mt: ['small', 'medium'] }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis justo, vehicula sit amet sapien eu, pulvinar aliquam justo. Nullam consequat sapien a massa interdum fermentum at ut velit. Curabitur eu tortor ante. Duis sed tortor non risus blandit placerat in id augue.</Text>
    </Hero>
  );
}

export const Example = Template.bind({});
Example.args = {
  src: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-300x185.webp',
  alt: 'Llama Cria',
  sources: [
    { srcset: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-300x185.webp 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-600x371.webp 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-900x556.webp 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-1200x742.webp 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-2400x1483.webp 2400w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-3600x2225.webp 3600w' },
    { srcset: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-300x185.jpg 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-600x371.jpg 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-900x556.jpg 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-1200x742.jpg 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-2400x1483.jpg 2400w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-3600x2225.jpg 3600w' },
  ],
  aspectRatio: 1.618,
  sx: {
    width: '50%',
    margin: '0 auto',
  },
};

Example.parameters = {
  backgrounds: { default: 'dark' },
};
