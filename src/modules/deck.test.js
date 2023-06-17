import { getDeck } from './deck';

describe('deck.js', () => {
  test('generates a standard 52-card deck', () => {
    const deck = getDeck();
    expect(deck.length).toBe(52);

    const faces = deck.filter(card => card.face !== null);
    expect(faces.length).toBe(12);

    const aces = deck.filter(card => card.label === 'A');
    expect(aces.length).toBe(4);

    const spades = deck.filter(card => card.suit === 'spades');
    expect(spades.length).toBe(13);

    const hearts = deck.filter(card => card.suit === 'hearts');
    expect(hearts.length).toBe(13);

    const clubs = deck.filter(card => card.suit === 'clubs');
    expect(clubs.length).toBe(13);

    const diamonds = deck.filter(card => card.suit === 'diamonds');
    expect(diamonds.length).toBe(13);
  });
  test('card objects have the right shape', () => {
    const deck = getDeck();
    expect(deck[0]).toMatchObject({
      color: '#000',
      suit: 'spades',
      face: null,
      label: 'A',
      pip: '♠',
      value: 1,
    });
  });
});
