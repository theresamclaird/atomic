/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Text } from '../Text';
import { HamburgerMenu } from './HamburgerMenu';

describe('HamburgerMenu', () => {
  test('renders child content', () => {
    render(
      <HamburgerMenu>
        <Text as="a" href="#">Menu Link</Text>
      </HamburgerMenu>,
    );
    expect(screen.getByText('☰')).toBeVisible();
    expect(screen.getByText('Menu Link')).toBeInTheDocument();
    expect(screen.getByText('Menu Link')).not.toBeVisible();
  });

  test('shows menu after click', () => {
    render(
      <HamburgerMenu>
        <Text as="a" href="#">Menu Link</Text>
      </HamburgerMenu>,
    );

    fireEvent.click(screen.getByRole('button', { name: '☰' }));
    expect(screen.getByText('Menu Link')).toBeVisible();
  });
});
