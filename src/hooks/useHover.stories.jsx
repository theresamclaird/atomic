import React from 'react';
import { useHover } from './useHover';
import { Box, Text } from '../..';

export default {
  title: 'Hooks/useHover',
  component: useHover,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function Template() {
  const [ref, hover] = useHover();

  return (
    <Box ref={ref} sx={{ p: 3, bg: hover ? '#f00' : 'unset' }}>
      <Text>{hover ? 'hover is true' : 'hover is false'}</Text>
    </Box>
  );
}

export const Default = Template.bind({});
