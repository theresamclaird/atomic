import React from 'react';
import Carousel from './Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function Template(args) {
  return <Carousel {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  images: [
    {
      alt: 'Seattle Japanese Garden',
      src: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/sjg-900.webp',
      sources: [
        { srcset: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/sjg-300.webp 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/sjg-600.webp 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/sjg-900.webp 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/sjg-1200.webp 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/sjg-2400.webp 2400w' },
        { srcset: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/sjg-300.jpg 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/sjg-600.jpg 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/sjg-900.jpg 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/sjg-1200.jpg 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/sjg-2400.jpg 2400w' },
      ],
    },
    {
      alt: 'Seattle',
      src: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/seattle-900.webp',
      sources: [
        { srcset: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/seattle-300.webp 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/seattle-600.webp 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/seattle-900.webp 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/seattle-1200.webp 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/seattle-2400.webp 2400w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/seattle-3600.webp 3600w' },
        { srcset: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/seattle-300.jpg 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/seattle-600.jpg 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/seattle-900.jpg 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/seattle-1200.jpg 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/seattle-2400.jpg 2400w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/seattle-3600.jpg 3600w' },
      ],
    },
    {
      alt: 'Taj Mahal',
      src: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/taj-mahal-900.webp',
      sources: [
        { srcset: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/taj-mahal-300.webp 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/taj-mahal-600.webp 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/taj-mahal-900.webp 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/taj-mahal-1200.webp 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/taj-mahal-2400.webp 2400w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/taj-mahal-3600.webp 3600w' },
        { srcset: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/taj-mahal-300.jpg 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/taj-mahal-600.jpg 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/taj-mahal-900.jpg 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/taj-mahal-1200.jpg 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/taj-mahal-2400.jpg 2400w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/taj-mahal-3600.jpg 3600w' },
      ],
    },
    {
      alt: 'Tōrō',
      src: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-900.webp',
      sources: [
        { srcset: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-300.webp 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-600.webp 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-900.webp 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-1200.webp 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-2400.webp 2400w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-3600.webp 3600w' },
        { srcset: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-300.jpg 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-600.jpg 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-900.jpg 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-1200.jpg 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-2400.jpg 2400w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-3600.jpg 3600w' },
      ],
    },
    {
      src: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-300x185.webp',
      alt: 'Llama Cria',
      sources: [
        { srcset: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-300x185.webp 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-600x371.webp 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-900x556.webp 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-1200x742.webp 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-2400x1483.webp 2400w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-3600x2225.webp 3600w' },
        { srcset: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-300x185.jpg 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-600x371.jpg 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-900x556.jpg 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-1200x742.jpg 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-2400x1483.jpg 2400w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-3600x2225.jpg 3600w' },
      ],
    },
  ],
};
