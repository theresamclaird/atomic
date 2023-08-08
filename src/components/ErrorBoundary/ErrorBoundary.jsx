import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Text } from '../Text';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { error, hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    const { log } = this.props;
    log(error, errorInfo);
  }

  render() {
    const { fallback, children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return fallback;
    }

    return children;
  }
}

ErrorBoundary.defaultProps = {
  log: () => null,
  fallback: <Text>Something went wrong.</Text>,
};

ErrorBoundary.propTypes = {
  log: PropTypes.func,
  fallback: PropTypes.node,
  children: PropTypes.node.isRequired,
};
