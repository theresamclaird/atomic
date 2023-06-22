import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '../Box';
import { Text } from '../Text';
import { useMetronome } from './useMetronome';
import { Flasher } from './Flasher';

function Metronome({ startMs, beatsPerMinute, sx, ...props }) {
  const [whole] = useMetronome(beatsPerMinute, startMs);
  const [half] = useMetronome(beatsPerMinute * 2, startMs);
  const [quarter] = useMetronome(beatsPerMinute * 4, startMs);
  const [eighth] = useMetronome(beatsPerMinute * 8, startMs);

  return (
    <Flex direction="column" justify="space-between" align="center">
      <Text>{`BPM: ${beatsPerMinute}`}</Text>
      <Flex sx={{ ...sx }} {...props}>
        <Flasher label="whole" beatCount={whole.beatCount} />
        <Flasher label="half" beatCount={half.beatCount} />
        <Flasher label="quarter" beatCount={quarter.beatCount} />
        <Flasher label="eighth" beatCount={eighth.beatCount} />
      </Flex>
    </Flex>
  );
}

Metronome.defaultProps = {
  beatsPerMinute: 15,
  sx: {},
};

Metronome.propTypes = {
  startMs: PropTypes.number.isRequired,
  sx: PropTypes.objectOf(PropTypes.any),
  beatsPerMinute: PropTypes.number,
};

export { Metronome, Metronome as default };
