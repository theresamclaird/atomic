import React from 'react';
import { storiesOf } from '@storybook/react';

import { Text } from './Text';

const stories = storiesOf('Atomic Components', module);

stories.add('Text', () => {
  return (<Text as="h1">This text as h1.</Text>);
});