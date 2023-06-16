/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Text } from './Text';

describe('Text', () => {
  test('Renders child content', () => {
    render(<Text>TEST</Text>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});
