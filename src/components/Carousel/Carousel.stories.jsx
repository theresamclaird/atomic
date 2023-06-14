import React from 'react';
import Carousel from './Carousel';

export default {
  title: 'Molecules/Carousel',
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
      alt: 'Machu Picchu',
      src: 'http://images.mclairdfamily.com.s3.us-west-2.amazonaws.com/_TEM1665-900.webp',
      sources: [
        { srcset: 'http://images.mclairdfamily.com/_TEM1665-300.webp 300w, http://images.mclairdfamily.com/_TEM1665-600.webp 600w, http://images.mclairdfamily.com/_TEM1665-900.webp 900w, http://images.mclairdfamily.com/_TEM1665-1200.webp 1200w, http://images.mclairdfamily.com/_TEM1665-2400.webp 2400w, http://images.mclairdfamily.com/_TEM1665-3600.webp 3600w' },
        { srcset: 'http://images.mclairdfamily.com/_TEM1665-300.jpg 300w, http://images.mclairdfamily.com/_TEM1665-600.jpg 600w, http://images.mclairdfamily.com/_TEM1665-900.jpg 900w, http://images.mclairdfamily.com/_TEM1665-1200.jpg 1200w, http://images.mclairdfamily.com/_TEM1665-2400.jpg 2400w, http://images.mclairdfamily.com/_TEM1665-3600.jpg 3600w' },
      ],
    },
    {
      alt: 'Seattle Japanese Garden',
      src: 'http://images.mclairdfamily.com/sjg-900.webp',
      sources: [
        { srcset: 'http://images.mclairdfamily.com/sjg-300.webp 300w, http://images.mclairdfamily.com/sjg-600.webp 600w, http://images.mclairdfamily.com/sjg-900.webp 900w, http://images.mclairdfamily.com/sjg-1200.webp 1200w, http://images.mclairdfamily.com/sjg-2400.webp 2400w' },
        { srcset: 'http://images.mclairdfamily.com/sjg-300.jpg 300w, http://images.mclairdfamily.com/sjg-600.jpg 600w, http://images.mclairdfamily.com/sjg-900.jpg 900w, http://images.mclairdfamily.com/sjg-1200.jpg 1200w, http://images.mclairdfamily.com/sjg-2400.jpg 2400w' },
      ],
    },
    {
      alt: 'Seattle',
      src: 'http://images.mclairdfamily.com/seattle-900.webp',
      sources: [
        { srcset: 'http://images.mclairdfamily.com/seattle-300.webp 300w, http://images.mclairdfamily.com/seattle-600.webp 600w, http://images.mclairdfamily.com/seattle-900.webp 900w, http://images.mclairdfamily.com/seattle-1200.webp 1200w, http://images.mclairdfamily.com/seattle-2400.webp 2400w, http://images.mclairdfamily.com/seattle-3600.webp 3600w' },
        { srcset: 'http://images.mclairdfamily.com/seattle-300.jpg 300w, http://images.mclairdfamily.com/seattle-600.jpg 600w, http://images.mclairdfamily.com/seattle-900.jpg 900w, http://images.mclairdfamily.com/seattle-1200.jpg 1200w, http://images.mclairdfamily.com/seattle-2400.jpg 2400w, http://images.mclairdfamily.com/seattle-3600.jpg 3600w' },
      ],
    },
    {
      alt: 'Taj Mahal',
      src: 'http://images.mclairdfamily.com/taj-mahal-900.webp',
      sources: [
        { srcset: 'http://images.mclairdfamily.com/taj-mahal-300.webp 300w, http://images.mclairdfamily.com/taj-mahal-600.webp 600w, http://images.mclairdfamily.com/taj-mahal-900.webp 900w, http://images.mclairdfamily.com/taj-mahal-1200.webp 1200w, http://images.mclairdfamily.com/taj-mahal-2400.webp 2400w, http://images.mclairdfamily.com/taj-mahal-3600.webp 3600w' },
        { srcset: 'http://images.mclairdfamily.com/taj-mahal-300.jpg 300w, http://images.mclairdfamily.com/taj-mahal-600.jpg 600w, http://images.mclairdfamily.com/taj-mahal-900.jpg 900w, http://images.mclairdfamily.com/taj-mahal-1200.jpg 1200w, http://images.mclairdfamily.com/taj-mahal-2400.jpg 2400w, http://images.mclairdfamily.com/taj-mahal-3600.jpg 3600w' },
      ],
    },
    {
      alt: 'Tōrō',
      src: 'http://images.mclairdfamily.com/lantern-900.webp',
      sources: [
        { srcset: 'http://images.mclairdfamily.com/lantern-300.webp 300w, http://images.mclairdfamily.com/lantern-600.webp 600w, http://images.mclairdfamily.com/lantern-900.webp 900w, http://images.mclairdfamily.com/lantern-1200.webp 1200w, http://images.mclairdfamily.com/lantern-2400.webp 2400w, http://images.mclairdfamily.com/lantern-3600.webp 3600w' },
        { srcset: 'http://images.mclairdfamily.com/lantern-300.jpg 300w, http://images.mclairdfamily.com/lantern-600.jpg 600w, http://images.mclairdfamily.com/lantern-900.jpg 900w, http://images.mclairdfamily.com/lantern-1200.jpg 1200w, http://images.mclairdfamily.com/lantern-2400.jpg 2400w, http://images.mclairdfamily.com/lantern-3600.jpg 3600w' },
      ],
    },
    {
      src: 'http://images.mclairdfamily.com/cria-300.webp',
      alt: 'Llama Cria',
      sources: [
        { srcset: 'http://images.mclairdfamily.com/cria-300.webp 300w, http://images.mclairdfamily.com/cria-600.webp 600w, http://images.mclairdfamily.com/cria-900.webp 900w, http://images.mclairdfamily.com/cria-1200.webp 1200w, http://images.mclairdfamily.com/cria-2400.webp 2400w, http://images.mclairdfamily.com/cria-3600.webp 3600w' },
        { srcset: 'http://images.mclairdfamily.com/cria-300.jpg 300w, http://images.mclairdfamily.com/cria-600.jpg 600w, http://images.mclairdfamily.com/cria-900.jpg 900w, http://images.mclairdfamily.com/cria-1200.jpg 1200w, http://images.mclairdfamily.com/cria-2400.jpg 2400w, http://images.mclairdfamily.com/cria-3600.jpg 3600w' },
      ],
    },
  ],
};
