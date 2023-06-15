/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Grid } from './Grid';

describe('Grid', () => {
  test('Renders child content', () => {
    render(<Grid>TEST</Grid>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});
