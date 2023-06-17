/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PlayingCard } from './PlayingCard';

describe('PlayingCard', () => {
  test('renders Ace', () => {
    render(
      <PlayingCard color="#000" suit="spades" label="A" pip="♠" value={1} />
    );

    expect(screen.getAllByText('A').length).toBe(2);
    expect(screen.getAllByText('A')[0]).toBeVisible();
    expect(screen.getAllByText('A')[1]).toBeVisible();

    // corner pips are rendered with CSS ::after
    expect(screen.getAllByText('♠').length).toBe(1);
    expect(screen.getAllByText('♠')[0]).toBeVisible();
  });

  test('renders Two', () => {
    render(
      <PlayingCard color="#000" suit="spades" label="2" pip="♠" value={2} />
    );

    expect(screen.getAllByText('2').length).toBe(2);
    expect(screen.getAllByText('2')[0]).toBeVisible();
    expect(screen.getAllByText('2')[1]).toBeVisible();

    // corner pips are rendered with CSS ::after
    expect(screen.getAllByText('♠').length).toBe(2);
    expect(screen.getAllByText('♠')[0]).toBeVisible();
    expect(screen.getAllByText('♠')[1]).toBeVisible();
  });

  test('renders Three', () => {
    render(
      <PlayingCard color="#000" suit="spades" label="3" pip="♠" value={3} />
    );

    expect(screen.getAllByText('3').length).toBe(2);
    expect(screen.getAllByText('3')[0]).toBeVisible();
    expect(screen.getAllByText('3')[1]).toBeVisible();

    // corner pips are rendered with CSS ::after
    expect(screen.getAllByText('♠').length).toBe(3);
    expect(screen.getAllByText('♠')[0]).toBeVisible();
    expect(screen.getAllByText('♠')[1]).toBeVisible();
    expect(screen.getAllByText('♠')[2]).toBeVisible();
  });

  test('renders Four', () => {
    render(
      <PlayingCard color="#000" suit="spades" label="4" pip="♠" value={4} />
    );

    expect(screen.getAllByText('4').length).toBe(2);
    expect(screen.getAllByText('4')[0]).toBeVisible();
    expect(screen.getAllByText('4')[1]).toBeVisible();

    // corner pips are rendered with CSS ::after
    expect(screen.getAllByText('♠').length).toBe(4);
    expect(screen.getAllByText('♠')[0]).toBeVisible();
    expect(screen.getAllByText('♠')[1]).toBeVisible();
    expect(screen.getAllByText('♠')[2]).toBeVisible();
    expect(screen.getAllByText('♠')[3]).toBeVisible();
  });

  test('renders Five', () => {
    render(
      <PlayingCard color="#000" suit="spades" label="5" pip="♠" value={5} />
    );

    expect(screen.getAllByText('5').length).toBe(2);
    expect(screen.getAllByText('5')[0]).toBeVisible();
    expect(screen.getAllByText('5')[1]).toBeVisible();

    // corner pips are rendered with CSS ::after
    expect(screen.getAllByText('♠').length).toBe(5);
    expect(screen.getAllByText('♠')[0]).toBeVisible();
    expect(screen.getAllByText('♠')[1]).toBeVisible();
    expect(screen.getAllByText('♠')[2]).toBeVisible();
    expect(screen.getAllByText('♠')[3]).toBeVisible();
    expect(screen.getAllByText('♠')[4]).toBeVisible();
  });

  test('renders Six', () => {
    render(
      <PlayingCard color="#000" suit="spades" label="6" pip="♠" value={6} />
    );

    expect(screen.getAllByText('6').length).toBe(2);
    expect(screen.getAllByText('6')[0]).toBeVisible();
    expect(screen.getAllByText('6')[1]).toBeVisible();

    // corner pips are rendered with CSS ::after
    expect(screen.getAllByText('♠').length).toBe(6);
    expect(screen.getAllByText('♠')[0]).toBeVisible();
    expect(screen.getAllByText('♠')[1]).toBeVisible();
    expect(screen.getAllByText('♠')[2]).toBeVisible();
    expect(screen.getAllByText('♠')[3]).toBeVisible();
    expect(screen.getAllByText('♠')[4]).toBeVisible();
    expect(screen.getAllByText('♠')[5]).toBeVisible();
  });

  test('renders Seven', () => {
    render(
      <PlayingCard color="#000" suit="spades" label="7" pip="♠" value={7} />
    );

    expect(screen.getAllByText('7').length).toBe(2);
    expect(screen.getAllByText('7')[0]).toBeVisible();
    expect(screen.getAllByText('7')[1]).toBeVisible();

    // corner pips are rendered with CSS ::after
    expect(screen.getAllByText('♠').length).toBe(7);
    expect(screen.getAllByText('♠')[0]).toBeVisible();
    expect(screen.getAllByText('♠')[1]).toBeVisible();
    expect(screen.getAllByText('♠')[2]).toBeVisible();
    expect(screen.getAllByText('♠')[3]).toBeVisible();
    expect(screen.getAllByText('♠')[4]).toBeVisible();
    expect(screen.getAllByText('♠')[5]).toBeVisible();
    expect(screen.getAllByText('♠')[6]).toBeVisible();
  });

  test('renders Eight', () => {
    render(
      <PlayingCard color="#000" suit="spades" label="8" pip="♠" value={8} />
    );

    expect(screen.getAllByText('8').length).toBe(2);
    expect(screen.getAllByText('8')[0]).toBeVisible();
    expect(screen.getAllByText('8')[1]).toBeVisible();

    // corner pips are rendered with CSS ::after
    expect(screen.getAllByText('♠').length).toBe(8);
    expect(screen.getAllByText('♠')[0]).toBeVisible();
    expect(screen.getAllByText('♠')[1]).toBeVisible();
    expect(screen.getAllByText('♠')[2]).toBeVisible();
    expect(screen.getAllByText('♠')[3]).toBeVisible();
    expect(screen.getAllByText('♠')[4]).toBeVisible();
    expect(screen.getAllByText('♠')[5]).toBeVisible();
    expect(screen.getAllByText('♠')[6]).toBeVisible();
    expect(screen.getAllByText('♠')[7]).toBeVisible();
  });

  test('renders Nine', () => {
    render(
      <PlayingCard color="#000" suit="spades" label="9" pip="♠" value={9} />
    );

    expect(screen.getAllByText('9').length).toBe(2);
    expect(screen.getAllByText('9')[0]).toBeVisible();
    expect(screen.getAllByText('9')[1]).toBeVisible();

    // corner pips are rendered with CSS ::after
    expect(screen.getAllByText('♠').length).toBe(9);
    expect(screen.getAllByText('♠')[0]).toBeVisible();
    expect(screen.getAllByText('♠')[1]).toBeVisible();
    expect(screen.getAllByText('♠')[2]).toBeVisible();
    expect(screen.getAllByText('♠')[3]).toBeVisible();
    expect(screen.getAllByText('♠')[4]).toBeVisible();
    expect(screen.getAllByText('♠')[5]).toBeVisible();
    expect(screen.getAllByText('♠')[6]).toBeVisible();
    expect(screen.getAllByText('♠')[7]).toBeVisible();
    expect(screen.getAllByText('♠')[8]).toBeVisible();
  });

  test('renders Ten', () => {
    render(
      <PlayingCard color="#000" suit="spades" label="10" pip="♠" value={10} />
    );

    expect(screen.getAllByText('10').length).toBe(2);
    expect(screen.getAllByText('10')[0]).toBeVisible();
    expect(screen.getAllByText('10')[1]).toBeVisible();

    // corner pips are rendered with CSS ::after
    expect(screen.getAllByText('♠').length).toBe(10);
    expect(screen.getAllByText('♠')[0]).toBeVisible();
    expect(screen.getAllByText('♠')[1]).toBeVisible();
    expect(screen.getAllByText('♠')[2]).toBeVisible();
    expect(screen.getAllByText('♠')[3]).toBeVisible();
    expect(screen.getAllByText('♠')[4]).toBeVisible();
    expect(screen.getAllByText('♠')[5]).toBeVisible();
    expect(screen.getAllByText('♠')[6]).toBeVisible();
    expect(screen.getAllByText('♠')[7]).toBeVisible();
    expect(screen.getAllByText('♠')[8]).toBeVisible();
    expect(screen.getAllByText('♠')[9]).toBeVisible();
  });

  test('renders Jack', () => {
    render(
      <PlayingCard
        color="#000"
        suit="spades"
        label="J"
        face="jack"
        pip="♠"
        value={10}
      />
    );

    expect(screen.getAllByText('J').length).toBe(2);
    expect(screen.getAllByText('J')[0]).toBeVisible();
    expect(screen.getAllByText('J')[1]).toBeVisible();

    // corner pips are rendered with CSS ::after
    expect(screen.getAllByText('♠').length).toBe(2);
    expect(screen.getAllByText('♠')[0]).toBeVisible();
    expect(screen.getAllByText('♠')[1]).toBeVisible();
  });

  test('renders Queen', () => {
    render(
      <PlayingCard
        color="#000"
        suit="spades"
        label="Q"
        face="queen"
        pip="♠"
        value={10}
      />
    );

    expect(screen.getAllByText('Q').length).toBe(2);
    expect(screen.getAllByText('Q')[0]).toBeVisible();
    expect(screen.getAllByText('Q')[1]).toBeVisible();

    // corner pips are rendered with CSS ::after
    expect(screen.getAllByText('♠').length).toBe(2);
    expect(screen.getAllByText('♠')[0]).toBeVisible();
    expect(screen.getAllByText('♠')[1]).toBeVisible();
  });

  test('renders King', () => {
    render(
      <PlayingCard
        color="#000"
        suit="spades"
        label="K"
        face="king"
        pip="♠"
        value={10}
      />
    );

    expect(screen.getAllByText('K').length).toBe(2);
    expect(screen.getAllByText('K')[0]).toBeVisible();
    expect(screen.getAllByText('K')[1]).toBeVisible();

    // corner pips are rendered with CSS ::after
    expect(screen.getAllByText('♠').length).toBe(2);
    expect(screen.getAllByText('♠')[0]).toBeVisible();
    expect(screen.getAllByText('♠')[1]).toBeVisible();
  });

  test('sx prop', () => {
    render(
      <PlayingCard
        color="#000"
        suit="spades"
        label="K"
        face="king"
        pip="♠"
        value={10}
      />
    );

    expect(screen.getAllByText('K').length).toBe(2);
    expect(screen.getAllByText('K')[0]).toBeVisible();
    expect(screen.getAllByText('K')[1]).toBeVisible();

    // corner pips are rendered with CSS ::after
    expect(screen.getAllByText('♠').length).toBe(2);
    expect(screen.getAllByText('♠')[0]).toBeVisible();
    expect(screen.getAllByText('♠')[1]).toBeVisible();
  });
});
