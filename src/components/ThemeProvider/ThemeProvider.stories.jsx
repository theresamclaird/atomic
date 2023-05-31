import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { Box } from '../Box';
import { Text } from '../Text';

export default {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function Template(args) {
  return (
    <ThemeProvider {...args}>
      <Box sx={{ padding: 1, backgroundColor: 'background' }}>
        <Text>Children within the ThemeProvider will be styled according to the theme.</Text>
      </Box>
    </ThemeProvider>
  );
}

export const Default = Template.bind({});
Default.args = {};

export const ThemeOverride = Template.bind({});
ThemeOverride.args = {
  theme: {
    space: [0, '5rem'],
    colors: { background: '#562cac' },
    text: { p: { fontFamily: 'cursive', color: '#fff' } },
  },
};
