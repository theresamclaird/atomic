/* eslint-disable max-len */
import React, { useState } from 'react';
import { Flex, Button, Text } from '..';
import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function ModalExample() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button label="Open Modal" onClick={() => setShowModal(!showModal)} />
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Text as="h2">Nulla Qui Incididunt</Text>
        <Text sx={{ mt: 1 }}>
          Non ea esse ad quis. Consequat non excepteur incididunt in. Deserunt exercitation non fugiat quis eu sit esse ad fugiat culpa ea elit voluptate reprehenderit. Labore commodo cillum adipisicing nostrud id voluptate tempor. Voluptate non mollit ullamco enim mollit aliquip id consequat ea proident.
        </Text>
        <Flex direction="row" justify="flex-end" align="center" gap={1} sx={{ mt: 1 }}>
          <Button label="Close" onClick={() => setShowModal(false)} />
          <Button label="Confirm" onClick={() => alert('Confirm Clicked')} />
        </Flex>
      </Modal>
    </>
  );
}

function Template(args) {
  return <ModalExample {...args} />;
}

export const Example = Template.bind({});
Example.args = {};
