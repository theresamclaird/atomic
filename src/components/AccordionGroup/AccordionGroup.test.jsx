/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AccordionGroup } from './AccordionGroup';
import { Accordion } from '../Accordion';

describe('AccordionGroup', () => {
  test('Renders child content', () => {
    render(
      <AccordionGroup>
        <Accordion label="LABEL1">CONTENT1</Accordion>
        <Accordion label="LABEL2">CONTENT2</Accordion>
      </AccordionGroup>
    );

    const label1Element = screen.getByText('LABEL1');
    const content1Element = screen.getByText('CONTENT1');
    const label2Element = screen.getByText('LABEL2');
    const content2Element = screen.getByText('CONTENT2');

    expect(label1Element).toBeInTheDocument();
    expect(content1Element).toBeInTheDocument();
    expect(label1Element).toBeVisible();
    expect(content1Element).not.toBeVisible();

    expect(label2Element).toBeInTheDocument();
    expect(content2Element).toBeInTheDocument();
    expect(label2Element).toBeVisible();
    expect(content2Element).not.toBeVisible();

    expect(screen.getAllByText('+').length).toBe(2);
    expect(screen.getAllByText('+')[0]).toBeVisible();
    expect(screen.getAllByText('+')[1]).toBeVisible();
  });

  test('interactions', () => {
    render(
      <AccordionGroup>
        <Accordion label="LABEL1">CONTENT1</Accordion>
        <Accordion label="LABEL2">CONTENT2</Accordion>
      </AccordionGroup>
    );

    expect(screen.getByText('CONTENT1')).not.toBeVisible();

    // Click to expand the Accordion.
    fireEvent.click(screen.getByRole('button', { name: 'LABEL1' }));
    expect(screen.getByText('CONTENT1')).toBeVisible();
    expect(screen.getByText('-')).toBeVisible();

    // Click again to collapse the Accordion.
    fireEvent.click(screen.getByRole('button', { name: 'LABEL1' }));
    expect(screen.getByText('CONTENT1')).not.toBeVisible();
    expect(screen.getAllByText('+').length).toBe(2);
    expect(screen.getAllByText('+')[0]).toBeVisible();
    expect(screen.getAllByText('+')[1]).toBeVisible();
  });

  test('interactions with custom reducer', () => {
    render(
      <AccordionGroup
        reducer={(state, action) =>
          state.map((value, index) => (index === action.index ? !value : false))
        }
      >
        <Accordion label="LABEL1">CONTENT1</Accordion>
        <Accordion label="LABEL2">CONTENT2</Accordion>
      </AccordionGroup>
    );

    expect(screen.getByText('CONTENT1')).not.toBeVisible();
    expect(screen.getByText('CONTENT2')).not.toBeVisible();

    // Click the first Accordion to expand it.
    fireEvent.click(screen.getByRole('button', { name: 'LABEL1' }));
    expect(screen.getByText('CONTENT1')).toBeVisible();
    expect(screen.getByText('CONTENT2')).not.toBeVisible();

    // Click the second Accordion to collapse the first and expand the second.
    fireEvent.click(screen.getByRole('button', { name: 'LABEL2' }));
    expect(screen.getByText('CONTENT1')).not.toBeVisible();
    expect(screen.getByText('CONTENT2')).toBeVisible();
  });
});
