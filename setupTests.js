jest.mock('nanoid', () => ({ nanoid: () => `nanoid-${Math.random()}` }));
