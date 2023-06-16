/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Box } from './Box';

describe('Box', () => {
  test('renders child content', () => {
    render(<Box>TEST</Box>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});
