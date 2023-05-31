import React from 'react';
import { Image } from './Image';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function ImageTemplate(args) {
  return <Image {...args} />;
}

export const Default = ImageTemplate.bind({});
Default.args = {
  alt: 'Tōrō',
  src: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-900.webp',
};

export const ResponsiveImage = ImageTemplate.bind({});
ResponsiveImage.args = {
  ...Default.args,
  sources: [
    { srcset: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-300.webp 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-600.webp 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-900.webp 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-1200.webp 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-2400.webp 2400w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-3600.webp 3600w' },
    { srcset: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-300.jpg 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-600.jpg 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-900.jpg 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-1200.jpg 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-2400.jpg 2400w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-3600.jpg 3600w' },
  ],
};

export const AspectRatioImage = ImageTemplate.bind({});
AspectRatioImage.args = {
  ...ResponsiveImage.args,
  aspectRatio: 1,
  sx: {
    width: '300px',
    '& img': {
      objectFit: 'cover',
      objectPosition: '20%',
    },
  },
};
