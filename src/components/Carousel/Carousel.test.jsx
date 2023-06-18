/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Carousel } from './Carousel';

describe('Carousel', () => {
  test('renders child content', async () => {
    render(
      <Carousel
        images={[
          {
            alt: 'First Image',
            src: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/_TEM1665-900.webp',
          },
          {
            alt: 'Second Image',
            src: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/sjg-900.webp',
          },
        ]}
      />
    );

    expect(screen.getByAltText('First Image')).toBeVisible();

    // Mouse enter the image to display the previous/next buttons.
    fireEvent.mouseEnter(screen.getByAltText('First Image'));
    await waitFor(() => screen.getByRole('button', { name: '>' }));
    expect(screen.getByRole('button', { name: '>' })).toBeVisible();
    expect(screen.getByRole('button', { name: '<' })).toBeVisible();

    //  Mouse leave the image to display the previous/next buttons.
    fireEvent.mouseLeave(screen.getByAltText('First Image'));
    await waitFor(() => screen.getByAltText('First Image'));

    // Mouse enter the image to display the previous/next buttons.
    fireEvent.mouseEnter(screen.getByAltText('First Image'));
    await waitFor(() => screen.getByRole('button', { name: '>' }));

    // While showing the first image, click the next button to display the second image.
    fireEvent.click(screen.getByRole('button', { name: '>' }));
    expect(screen.getByAltText('Second Image')).toBeVisible();

    // While showing the second image, click the previous button to display the first image.
    fireEvent.click(screen.getByRole('button', { name: '<' }));
    expect(screen.getByAltText('First Image')).toBeVisible();

    // While showing the first image, click the previous button to rotate through
    // and display the second image.
    fireEvent.click(screen.getByRole('button', { name: '<' }));
    expect(screen.getByAltText('Second Image')).toBeVisible();

    // While showing the second image, click the next button to rotate through
    // and show the first image.
    fireEvent.click(screen.getByRole('button', { name: '>' }));
    expect(screen.getByAltText('First Image')).toBeVisible();

    // Next button remains visible after mouse enter the next button.
    fireEvent.mouseEnter(screen.getByRole('button', { name: '>' }));
    await waitFor(() => screen.getByRole('button', { name: '>' }));

    // Mouse leave next button
    fireEvent.mouseLeave(screen.getByRole('button', { name: '>' }));
    await waitFor(() => screen.getByAltText('First Image'));

    fireEvent.mouseEnter(screen.getByAltText('First Image'));
    await waitFor(() => screen.getByRole('button', { name: '<' }));

    // Previous button remains visible after mouse enter the next button.
    fireEvent.mouseEnter(screen.getByRole('button', { name: '<' }));
    await waitFor(() => screen.getByRole('button', { name: '<' }));

    // Mouse leave previous button
    fireEvent.mouseEnter(screen.getByAltText('First Image'));
    await waitFor(() => screen.getByRole('button', { name: '<' }));
    fireEvent.mouseLeave(screen.getByRole('button', { name: '<' }));
    await waitFor(() => screen.getByAltText('First Image'));
  });

  test('bottom navigation buttons', async () => {
    render(
      <Carousel
        images={[
          {
            alt: 'First Image',
            src: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/_TEM1665-900.webp',
          },
          {
            alt: 'Second Image',
            src: 'https://mclairdfamily-images.s3.us-west-2.amazonaws.com/sjg-900.webp',
          },
        ]}
      />
    );

    expect(screen.getByAltText('Selected')).toBeVisible();
    expect(screen.getByAltText('Select')).toBeVisible();

    fireEvent.click(screen.getByAltText('Select'));
    expect(screen.getByAltText('Second Image')).toBeVisible();
  });
});
