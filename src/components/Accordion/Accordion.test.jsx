/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Accordion } from './Accordion';

describe('Accordion', () => {
  test('Renders child content', () => {
    render(<Accordion label="TEST">REVEAL</Accordion>);

    const labelElement = screen.getByText('TEST');
    const contentElement = screen.getByText('REVEAL');

    // Initial state
    expect(labelElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(labelElement).toBeVisible();
    expect(contentElement).not.toBeVisible();

    // Expanded state
    fireEvent.click(labelElement);
    expect(contentElement).toBeVisible();

    // Collapsed state
    fireEvent.click(labelElement);
    expect(contentElement).not.toBeVisible();
  });
});
