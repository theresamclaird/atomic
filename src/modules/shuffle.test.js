import { getDeck } from './deck';
import { shuffle } from './shuffle';

describe('shuffle.js', () => {
  test('shuffles a standard 52-card deck', () => {
    const deck = getDeck();
    const shuffledDeck = shuffle(deck);

    /*
      There is a 1 in 52! chance that the deck will be in the same/starting order, making
      this test fail. 52! is big. Like really big. 8 followed by 67 zeroes big. If you
      counted each and every grain of sand on every beach around the globe, that number
      will still be effectively zero compared to 52!.

      (see: https://www.youtube.com/watch?v=hoeIllSxpEU)

      While it is technically possible for 52 cards to be shuffled and end up in the same
      order they started in, the odds are so incredibly small as to be effectively zero.
      So small in fact, that every time 52 cards are (legitimately) shuffled, the resulting
      order will almost certainly be unique among all of the decks that humanity has ever
      shuffled since the beginning of time.

      So if this test ever fails, something is definitely wrong with the shuffle algorithm.
    */
    expect(JSON.stringify(deck)).not.toBe(JSON.stringify(shuffledDeck));
  });
});
