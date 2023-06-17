/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Hero } from './Hero';

describe('Hero', () => {
  test('renders child content', () => {
    render(
      <Hero
        alt="TESTALT"
        src="https://mclairdfamily-images.s3.us-west-2.amazonaws.com/demo-300x185.webp"
        aspectRatio={1.618}
      >
        TEST
      </Hero>
    );

    expect(screen.getByAltText('TESTALT')).toBeVisible();
    expect(screen.getByText('TEST')).toBeVisible();
  });
});
