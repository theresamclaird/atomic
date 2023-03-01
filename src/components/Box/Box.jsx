import styled from '@emotion/styled';
import {
  compose,
  space,
  color,
} from 'styled-system';
import css, { get } from '@styled-system/css';
import shouldForwardProp from '@styled-system/should-forward-prop';

const sx = (props) => css(props.sx)(props.theme);
// eslint-disable-next-line no-underscore-dangle
const base = (props) => css(props.__css)(props.theme);
const variant = ({
  theme,
  // eslint-disable-next-line no-shadow
  variant,
  tx = 'variants',
}) => css(
  get(
    theme,
    `${tx}.${variant}`,
    get(theme, variant),
  ),
)(theme);

const Box = styled('div', {
  shouldForwardProp,
})(
  base,
  variant,
  sx,
  (props) => props.css,
  compose(
    space,
    color,
  ),
);
Box.displayName = 'Box';

const Flex = styled(Box)({ display: 'flex' });
Flex.displayName = 'Flex';

export { Box, Flex, Box as default };
