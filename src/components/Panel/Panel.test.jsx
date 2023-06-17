/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Panel } from './Panel';

describe('Panel', () => {
  test('renders child content', () => {
    render(<Panel>TEST</Panel>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});
