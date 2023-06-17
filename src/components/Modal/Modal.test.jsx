/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../Button';
import { Text } from '../Text';
import { Modal } from './Modal';

describe('Modal', () => {
  function ModalTest() {
    const [showModal, setShowModal] = useState(false);
    return (
      <>
        <Button label="OPEN" onClick={() => setShowModal(!showModal)} />
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <Text>TEST</Text>
        </Modal>
      </>
    );
  }

  test('renders child content', () => {
    render(<ModalTest />);
    expect(screen.getByRole('button', { name: 'OPEN' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'OPEN' }));
    expect(screen.getByText('TEST')).toBeVisible();
  });
});
