import React from 'react';
import PropTypes from 'prop-types';

function WizardFlow({ children, currentIndex, onNext, onPrevious }) {
  const goToNext = stepData => {
    onNext(stepData);
  };

  const goToPrevious = () => {
    onPrevious();
  };

  const currentChild = React.Children.toArray(children)[currentIndex];
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext, goToPrevious });
  }

  return currentChild;
}

WizardFlow.defaultProps = {
  children: null,
  currentIndex: 0,
  onNext: () => undefined,
  onPrevious: () => undefined,
};

WizardFlow.propTypes = {
  children: PropTypes.node,
  currentIndex: PropTypes.number,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
};

export { WizardFlow, WizardFlow as default };
