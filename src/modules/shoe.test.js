import { getShoe } from './shoe';

describe('deck.js', () => {
  test('generates a shoe with one deck of cards', () => {
    const shoe = getShoe(1);
    expect(shoe.length).toBe(52);
  });

  test('generates a shoe with two decks of cards', () => {
    const shoe = getShoe(2);
    expect(shoe.length).toBe(52 * 2);
  });

  test('generates a shoe with three decks of cards', () => {
    const shoe = getShoe(3);
    expect(shoe.length).toBe(52 * 3);
  });

  test('generates a shoe with four decks of cards', () => {
    const shoe = getShoe(4);
    expect(shoe.length).toBe(52 * 4);
  });

  test('generates a shoe with five decks of cards', () => {
    const shoe = getShoe(5);
    expect(shoe.length).toBe(52 * 5);
  });

  test('generates a shoe with six decks of cards', () => {
    const shoe = getShoe(6);
    expect(shoe.length).toBe(52 * 6);
  });
});
