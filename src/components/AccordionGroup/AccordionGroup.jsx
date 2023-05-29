import React, { Children, useReducer, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';

function AccordionGroup({
  reducer, children, expandSymbol, collapseSymbol, ...props
}) {
  const childArray = Children.toArray(children);
  const [state, dispatch] = useReducer(reducer, childArray.map(() => false));

  return (
    <Box {...props}>
      {childArray.map((child, index) => (cloneElement(child, {
        key: child.label,
        expandSymbol,
        collapseSymbol,
        expanded: state[index],
        onClick: () => dispatch({ index }),
      })))}
    </Box>
  );
}

AccordionGroup.defaultProps = {
  reducer: (state, action) => (
    state.map((value, index) => (index === action.index ? !value : value))
  ),
  expandSymbol: '+',
  collapseSymbol: '-',
};

AccordionGroup.propTypes = {
  reducer: PropTypes.func,
  children: PropTypes.node.isRequired,
  expandSymbol: PropTypes.string,
  collapseSymbol: PropTypes.string,
};

export { AccordionGroup, AccordionGroup as default };
