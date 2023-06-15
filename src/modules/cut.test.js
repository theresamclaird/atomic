import { cut } from './cut';
import { getDeck } from './deck';

describe('cut.js', () => {
  test('deck order is correct after cut', () => {
    const deck = getDeck();

    const cutDeck0Percent = cut(deck, 0);
    expect(cutDeck0Percent[0]).toMatchObject({ suit: 'spades', label: 'A' });
    expect(cutDeck0Percent[51]).toMatchObject({ suit: 'diamonds', label: 'K' });

    const cutDeck25Percent = cut(deck, 25);
    expect(cutDeck25Percent[0]).toMatchObject({ suit: 'hearts', label: 'A' });
    expect(cutDeck25Percent[51]).toMatchObject({ suit: 'spades', label: 'K' });

    const cutDeck50Percent = cut(deck, 50);
    expect(cutDeck50Percent[0]).toMatchObject({ suit: 'clubs', label: 'A' });
    expect(cutDeck50Percent[51]).toMatchObject({ suit: 'hearts', label: 'K' });

    const cutDeck75Percent = cut(deck, 75);
    expect(cutDeck75Percent[0]).toMatchObject({ suit: 'diamonds', label: 'A' });
    expect(cutDeck75Percent[51]).toMatchObject({ suit: 'clubs', label: 'K' });

    const cutDeck100Percent = cut(deck, 100);
    expect(cutDeck100Percent[0]).toMatchObject({ suit: 'spades', label: 'A' });
    expect(cutDeck0Percent[51]).toMatchObject({ suit: 'diamonds', label: 'K' });
  });

  test('cutting a single card is a noop', () => {
    const deck = [{ suit: 'spades', label: 'A' }];
    const cutDeck = cut(deck, 50);
    expect(cutDeck).toMatchObject(deck);
  });

  test('throws an error with invalid percents', () => {
    const deck = [{ suit: 'spades', label: 'A' }];
    expect(() => {
      cut(deck, -1);
    }).toThrow();

    expect(() => {
      cut(deck, 101);
    }).toThrow();

    expect(() => {
      cut(deck, 50);
    }).not.toThrow();
  });
});
