import React, { Fragment } from 'react';
import { Flex } from '../Box';
import { PlayingCard } from './PlayingCard';
import { getDeck } from '../../utils/deck';

export default {
  title: 'Components/PlayingCard/Deck',
  component: PlayingCard,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

const deck = getDeck();

function DeckTemplate() {
  return (
    <Flex
      sx={{
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      {deck.map((card) => (
        <Fragment key={`${card.label} of ${card.suit}}`}>
          <PlayingCard {...card} />
        </Fragment>
      ))}
    </Flex>
  );
}
export const Cards = DeckTemplate.bind({});
Cards.args = {};
