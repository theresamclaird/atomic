/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button', () => {
  test('Renders child content', () => {
    render(<Button label="TEST" />);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});
