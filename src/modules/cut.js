const cut = (cards = [], percent = 50) => {
  if (percent < 0 || percent > 100) {
    throw new Error('Invalid Percent');
  }

  if (cards.length < 2) {
    return cards;
  }

  const location = Math.floor((cards.length * percent) / 100);
  return [...cards.slice(location), ...cards.slice(0, location)];
};

export { cut, cut as default };
