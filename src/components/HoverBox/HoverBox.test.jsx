/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HoverBox } from './HoverBox';
import { Text } from '../Text';

describe('HoverBox', () => {
  test('renders child content', async () => {
    render(
      <HoverBox>
        {mouseEntered => <Text>{mouseEntered ? 'YES' : 'NO'}</Text>}
      </HoverBox>
    );
    expect(screen.getByText('NO')).toBeVisible();

    fireEvent.mouseEnter(screen.getByText('NO'));
    await waitFor(() => screen.getByText('YES'));
    expect(screen.getByText('YES')).toBeVisible();

    fireEvent.mouseLeave(screen.getByText('YES'));
    await waitFor(() => screen.getByText('NO'));
    expect(screen.getByText('NO')).toBeVisible();
  });
});
