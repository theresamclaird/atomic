import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from './Box';

const stories = storiesOf('Atomic Components', module);

stories.add('Box', () => {
  return (<Box sx={{ p: '1rem', color: '#fff' }}>This is a Box with styling.</Box>);
});