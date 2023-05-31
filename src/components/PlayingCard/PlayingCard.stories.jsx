import React, { Fragment } from 'react';
import { PlayingCard } from './PlayingCard';
import { PlayingCardBack } from './PlayingCardBack';
import { Flex } from '../Box';
import { getDeck } from '../../modules/deck';

export default {
  title: 'Components/Playing Card',
  component: PlayingCard,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function PlayingCardTemplate(args) {
  return (
    <PlayingCard {...args} sx={{ display: 'inline-block' }} />
  );
}

export const Front = PlayingCardTemplate.bind({});
Front.args = {
  color: '#000',
  suit: 'spades',
  label: 'A',
  pip: '♠',
  value: 1,
};

function PlayingCardBackTemplate(args) {
  return <PlayingCardBack {...args} sx={{ display: 'inline-block' }} />;
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
      {deck.map((card) => (
        <Fragment key={`${card.label} of ${card.suit}}`}>
          <PlayingCard {...card} />
        </Fragment>
      ))}
    </Flex>
  );
}
export const Deck = DeckTemplate.bind({});
Deck.args = {};
