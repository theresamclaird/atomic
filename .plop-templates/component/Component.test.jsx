/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { {{componentName}} } from './{{componentName}}';

describe('{{componentName}}', () => {
  test('renders content', () => {
    render(<{{componentName}}>TEST</{{componentName}}>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});
