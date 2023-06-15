/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Flex } from './Flex';

describe('Flex', () => {
  test('Renders child content', () => {
    render(<Flex>TEST</Flex>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});
