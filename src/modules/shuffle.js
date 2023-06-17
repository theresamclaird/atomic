/* eslint-disable no-param-reassign */
const shuffle = (cards = []) => {
  const shuffled = [...cards];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomCardIndex = Math.floor(Math.random() * (index + 1));
    const temp = shuffled[randomCardIndex];
    shuffled[randomCardIndex] = shuffled[index];
    shuffled[index] = temp;
  }
  return shuffled;
};

export { shuffle, shuffle as default };
