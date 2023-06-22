import React from 'react';
import Metronome from './Metronome';

export default {
  title: 'Atoms/Metronome',
  component: Metronome,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function Template(args) {
  return <Metronome {...args} />;
}

export const Orchestrated = Template.bind({});
Orchestrated.args = {
  startMs: new Date().getTime(),
};

// export const Andante = Template.bind({});
// Andante.args = { beatsPerMinute: 73 };

// export const Moderato = Template.bind({});
// Moderato.args = { beatsPerMinute: 86 };

// export const Allegretto = Template.bind({});
// Allegretto.args = { beatsPerMinute: 98 };

// export const Allegro = Template.bind({});
// Allegro.args = { beatsPerMinute: 109 };
