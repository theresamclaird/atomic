import React from 'react';
import { Hero } from './Hero';
import { Flex, Text } from '..';

export default {
  title: 'Components/Hero',
  component: Hero,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function HeroTemplate(args) {
  return (
    <Flex justify="center" sx={{ alignItems: ['flex-start', 'center'], height: '100vh', backgroundColor: 'background' }}>
      <Hero {...args}>
        <Text as="h2">Llama Cria</Text>
        <Text sx={{ mt: 'small' }}>One of the most interesting facts about llama cria is their ability to recognize and remember their mothers even after a long separation. Llama cria have a remarkable memory and can identify their mothers by their scent and unique vocalizations, even if they have been separated for an extended period. This strong bond between a llama cria and its mother highlights the depth of their social and familial connections. It is quite remarkable that despite growing up and potentially forming relationships with other llamas, the cria can still distinguish and remember their own mothers, showcasing their exceptional cognitive abilities and memory skills.</Text>
      </Hero>
    </Flex>
  );
}

export const Default = HeroTemplate.bind({});
Default.args = {
  src: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-300x185.webp',
  alt: 'Llama Cria',
  sources: [
    { srcset: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-300x185.webp 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-600x371.webp 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-900x556.webp 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-1200x742.webp 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-2400x1483.webp 2400w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-3600x2225.webp 3600w' },
    { srcset: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-300x185.jpg 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-600x371.jpg 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-900x556.jpg 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-1200x742.jpg 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-2400x1483.jpg 2400w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-3600x2225.jpg 3600w' },
  ],
  aspectRatio: 1.618,
  sx: { width: ['100%', '80%', '50%'], border: 'solid 1px #000' },
};
