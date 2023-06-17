/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  test('renders child content', () => {
    render(<Navbar>TEST</Navbar>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});
