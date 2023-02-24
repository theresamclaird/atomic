import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';

const Text = forwardRef(({
    as, children, ...props
}, ref) => (
    <Box
        as={as}
        ref={ref}
        tx="text"
        {...props}
    >
        {children}
    </Box>
));

Text.defaultProps = {
    as: 'p',
    sx: {},
};

Text.propTypes = {
    as: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export { Text };