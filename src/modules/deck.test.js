import { getDeck } from './deck';

describe('deck.js', () => {
  test('generates a standard 52-card deck', () => {
    const deck = getDeck();
    expect(deck.length).toBe(52);
  });
});
