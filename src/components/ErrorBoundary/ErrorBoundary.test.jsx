/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorBoundary from './ErrorBoundary';

function Throw() {
  throw new Error('Error Thrown');
  // eslint-disable-next-line no-unreachable
  return <p>No error thrown.</p>;
}

describe('ErrorBoundary', () => {
  test('renders child content', () => {
    render(
      <ErrorBoundary fallback={<p>Fallback UI</p>}>
        <Throw />
      </ErrorBoundary>
    );
    expect(screen.getByText('Fallback UI')).toBeInTheDocument();
  });
});
