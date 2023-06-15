import { getDeck } from './deck';
import { shuffle } from './shuffle';

describe('shuffle.js', () => {
  test('shuffles a standard 52-card deck', () => {
    const deck = getDeck();
    const shuffledDeck = shuffle(deck);

    // There is a 1 in 52! chance that the deck will be in the same order, making this test fail.
    expect(JSON.stringify(deck)).not.toBe(JSON.stringify(shuffledDeck));
  });
});
