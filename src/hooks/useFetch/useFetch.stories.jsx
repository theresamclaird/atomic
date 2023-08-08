import React from 'react';
import useFetch from './useFetch';
import { Box } from '../../components/Box';
import { Text } from '../../components/Text';
import { Image } from '../../components/Image';

export default {
  title: 'Hooks/useFetch',
  component: useFetch,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function Rick() {
  const { responseData, error, loading } = useFetch(
    'https://rickandmortyapi.com/api/character/1'
  );

  if (error) {
    throw error;
  }
  if (loading) return <h1>loading...</h1>;
  if (!responseData) return <h1>No data</h1>;

  const { id, name, status, species, gender, image } = responseData;

  return (
    <Box sx={{ p: 'medium' }}>
      <Text sx={{ mb: 'medium' }}>
        API:{' '}
        <Text
          as="a"
          href="https://rickandmortyapi.com/api/character/1"
          target="_blank"
        >
          https://rickandmortyapi.com/api/character/1
        </Text>
      </Text>
      <Image src={image} alt={name} sx={{ width: '10rem' }} />
      <Text as="h2">{name}</Text>
      <Text>{`id: ${id}`}</Text>
      <Text>{`status: ${status}`}</Text>
      <Text>{`species: ${species}`}</Text>
      <Text>{`gender: ${gender}`}</Text>
    </Box>
  );
}

function Template() {
  return <Rick />;
}

export const Default = Template.bind({});
