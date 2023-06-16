/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button', () => {
  test('Renders child content', () => {
    render(<Button label="TEST" />);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('executes onClick when clicked', () => {
    const stub = jest.fn();
    render(<Button label="TEST" onClick={stub} />);
    fireEvent.click(screen.getByText('TEST'));
    expect(stub).toBeCalled();
  });
});
