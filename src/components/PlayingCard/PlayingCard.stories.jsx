import React, { Fragment } from 'react';
import { PlayingCard } from './PlayingCard';
import { PlayingCardBack } from './PlayingCardBack';
import { Flex } from '../Box';
import { getDeck } from '../../modules/deck';
import { queenHearts } from '../../images';

export default {
  title: 'Molecules/PlayingCard',
  component: PlayingCard,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function PlayingCardTemplate(args) {
  return <PlayingCard {...args} />;
}

export const Front = PlayingCardTemplate.bind({});
Front.args = {
  color: '#000',
  suit: 'spades',
  label: 'A',
  pip: '♠',
  value: 1,
};

export const Face = PlayingCardTemplate.bind({});
Face.args = {
  color: '#f00',
  suit: 'hearts',
  label: 'Q',
  pip: '♥',
  value: 10,
  face: queenHearts,
};

function PlayingCardBackTemplate(args) {
  return <PlayingCardBack {...args} />;
}

export const Back = PlayingCardBackTemplate.bind({});
Back.args = {};

const deck = getDeck();

function DeckTemplate() {
  return (
    <Flex
      sx={{
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      {deck.map(card => (
        <Fragment key={`${card.label} of ${card.suit}}`}>
          <PlayingCard {...card} />
        </Fragment>
      ))}
    </Flex>
  );
}
export const Deck = DeckTemplate.bind({});
Deck.args = {};
