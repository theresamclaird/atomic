import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Flex, Box } from '../Box';

function Modal({
  onClose, backgroundColor, children, show, sx, ...props
}) {
  const contentRef = useRef();

  if (!show) {
    return null;
  }

  const handleCloseModal = (e) => {
    if (!contentRef.current?.contains(e.target)) {
      onClose();
    }
  };

  return createPortal(
    <Flex
      justify="center"
      align="center"
      sx={{
        backgroundColor,
        position: 'absolute',
        zIndex: 2147483647,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        height: '100%',
        width: '100vw',
      }}
      onClick={handleCloseModal}
    >
      <Box
        ref={contentRef}
        sx={{
          width: '50%',
          maxHeight: '50%',
          backgroundColor: 'white',
          padding: 1,
          boxShadow: '0 0 15px #000',
          ...sx,
        }}
        {...props}
      >
        {children}
      </Box>
    </Flex>,
    document.querySelector('body'),
  );
}

Modal.defaultProps = {
  backgroundColor: 'rgb(50, 50, 50, 0.6)',
  onClose: () => null,
  show: false,
  sx: {},
};

Modal.propTypes = {
  backgroundColor: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
  sx: PropTypes.objectOf(PropTypes.any),
};

export { Modal, Modal as default };
