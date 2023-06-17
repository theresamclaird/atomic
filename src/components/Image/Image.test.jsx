/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Image } from './Image';

describe('Image', () => {
  test('renders child content', () => {
    render(
      <Image
        alt="TESTALT"
        src="https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-900.webp"
        sources={[
          { srcset: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-300.webp 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-600.webp 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-900.webp 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-1200.webp 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-2400.webp 2400w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-3600.webp 3600w' },
          { srcset: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-300.jpg 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-600.jpg 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-900.jpg 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-1200.jpg 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-2400.jpg 2400w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-3600.jpg 3600w' },
        ]}
        aspectRatio={1}
      />,
    );
    expect(screen.getByAltText('TESTALT')).toBeVisible();
  });
});
