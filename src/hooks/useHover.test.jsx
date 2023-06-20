/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useHover } from './useHover';
import { Box } from '../components';

describe('useHover', () => {
  it('should detect hover state correctly', () => {
    function Component() {
      const [ref, hover] = useHover();
      return <Box ref={ref}>{hover ? 'YES_HOVER' : 'NO_HOVER'}</Box>;
    }

    render(<Component />);

    expect(screen.getByText('NO_HOVER')).toBeVisible();

    fireEvent.mouseEnter(screen.getByText('NO_HOVER'));
    expect(screen.getByText('YES_HOVER')).toBeVisible();

    fireEvent.mouseLeave(screen.getByText('YES_HOVER'));
    expect(screen.getByText('NO_HOVER')).toBeVisible();
  });

  it('BS coverage test', () => {
    function Component() {
      // eslint-disable-next-line no-unused-vars
      const [ref, hover] = useHover();
      return <Box>NO_ELEMENT</Box>;
    }

    render(<Component />);

    expect(screen.getByText('NO_ELEMENT')).toBeVisible();
  });
});
