/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Anchor } from './Anchor';

describe('Anchor', () => {
  test('Renders child content', () => {
    render(<Anchor href="#">TEST</Anchor>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});
