/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Accordion } from './Accordion';

describe('Accordion', () => {
  test('renders collapsed', () => {
    render(<Accordion label="LABEL">CONTENT</Accordion>);

    const labelElement = screen.getByText('LABEL');
    const contentElement = screen.getByText('CONTENT');

    expect(labelElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(labelElement).toBeVisible();
    expect(contentElement).not.toBeVisible();
  });

  test('Renders expanded', () => {
    render(
      <Accordion expanded label="LABEL">
        CONTENT
      </Accordion>
    );

    expect(screen.getByText('CONTENT')).toBeVisible();
  });
});
