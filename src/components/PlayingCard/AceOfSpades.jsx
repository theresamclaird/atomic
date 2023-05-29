import React from 'react';
import { PlayingCard } from './PlayingCard';

export default function AceOfSpades() {
  return (
    <PlayingCard
      color="#000"
      suit="spades"
      label="A"
      pip="♠"
      value={1}
    />
  );
}
