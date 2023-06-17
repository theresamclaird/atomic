/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from './ThemeProvider';

describe('ThemeProvider', () => {
  test('renders child content', () => {
    render(<ThemeProvider>TEST</ThemeProvider>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});
