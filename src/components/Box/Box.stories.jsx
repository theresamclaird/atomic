import React from 'react';
import { Box, Flex, Grid } from './Box';
import { Text } from '..';

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function BoxTemplate(args) {
  return <Box {...args} />;
}

export const Default = BoxTemplate.bind({});
Default.args = {
  children: <Text>This is a default Box.</Text>,
};

export const StyledBox = BoxTemplate.bind({});
StyledBox.args = {
  children: <Text>This Box is styled using the sx prop.</Text>,
  sx: {
    backgroundColor: '#609',
    border: 'solid 3px #000',
    borderRadius: '0.5rem',
    padding: '1rem',
    margin: '1rem',
    '> p': { color: '#fff' },
  },
};

export const UnorderedList = BoxTemplate.bind({});
UnorderedList.args = {
  children: [
    <Text as="li">First Bullet</Text>,
    <Text as="li">Second Bullet</Text>,
  ],
  as: 'ul',
};

function FlexTemplate(args) {
  return (
    <Flex {...args}>
      <Text>First Element</Text>
      <Text>Second Element</Text>
      <Text>Third Element</Text>
    </Flex>
  );
}

export const FlexBox = FlexTemplate.bind({});
FlexBox.args = {
  sx: {
    margin: '1rem',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '1rem',
    '> p': {
      backgroundColor: '#609',
      color: '#fff',
      borderRadius: '0.5rem',
      padding: '3rem',
    },
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
  sx: {
    margin: '1rem',
    gridTemplateColumns: '10rem 10rem 10rem',
    gridGap: '1rem',
    '> p': {
      backgroundColor: '#609',
      color: '#fff',
      borderRadius: '0.5rem',
      padding: '3rem',
    },
  },
};
