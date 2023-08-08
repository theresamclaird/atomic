import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import { Text } from '..';

export default {
  title: 'Atoms/ErrorBoundary',
  component: ErrorBoundary,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function Throw({ children }) {
  throw new Error('An expected error is thrown.');
  // eslint-disable-next-line no-unreachable
  return children;
}

function Template(args) {
  return (
    <ErrorBoundary {...args}>
      <Throw>
        <Text>This text is inside a Box.</Text>
      </Throw>
    </ErrorBoundary>
  );
}

export const Default = Template.bind({});
Default.args = {
  fallback: (
    <Text sx={{ p: 'large' }}>
      An intentional error was thrown and this is the fallback UI.
    </Text>
  ),
};
