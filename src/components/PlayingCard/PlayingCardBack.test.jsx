/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PlayingCardBack } from './PlayingCardBack';

describe('PlayingCardBack', () => {
  test('renders child content', () => {
    render(<PlayingCardBack />);
    expect(screen.getByTestId('card-back')).toBeInTheDocument();
  });
});
