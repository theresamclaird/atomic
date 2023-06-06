import React from 'react';
import { Grid } from './Grid';
import { Text } from '..';

export default {
  title: 'Atoms/Grid',
  component: Grid,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function GridTemplate(args) {
  return (
    <Grid {...args}>
      <Text>First Element</Text>
      <Text>Second Element</Text>
      <Text>Third Element</Text>
      <Text>Fourth Element</Text>
      <Text>Fifth Element</Text>
      <Text>Sixth Element</Text>
    </Grid>
  );
}

export const GridBox = GridTemplate.bind({});
GridBox.args = {
  columns: '10rem 20rem 10rem',
  rows: '5rem 5rem',
  gap: '1rem',
  sx: {
    margin: '1rem',
    '> p': {
      backgroundColor: '#609',
      color: '#fff',
      borderRadius: '0.5rem',
      padding: '1rem',
    },
  },
};
