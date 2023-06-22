import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '../Box';
import { Text } from '../Text';
import { useMetronome } from './useMetronome';
import { Flasher } from './Flasher';

function Metronome({ startMs, beatsPerMinuteX, bpmY, bpmZ, sx, sy, sz, ...props }) {
  const [whole] = useMetronome(beatsPerMinuteX / 4, startMs);
  const [half] = useMetronome(beatsPerMinuteX / 2, startMs);
  const [quarter] = useMetronome(beatsPerMinuteX, startMs);
  const [eighth] = useMetronome(beatsPerMinuteX * 2, startMs);
  const [sixteenth] = useMetronome(beatsPerMinuteX * 2, startMs);
  const [thirtysecond] = useMetronome(beatsPerMinuteX * 2, startMs);

  const [wholey] = useMetronome(bpmY / 4, startMs);
  const [halfy] = useMetronome(bpmY / 2, startMs);
  const [quartery] = useMetronome(bpmY, startMs);
  const [eighthy] = useMetronome(bpmY * 2, startMs);
  const [sixteenthy] = useMetronome(bpmY * 2, startMs);
  const [thirtysecondy] = useMetronome(bpmY * 2, startMs);

  const [wholez] = useMetronome(bpmZ / 4, startMs);
  const [halfz] = useMetronome(bpmZ / 2, startMs);
  const [quarterz] = useMetronome(bpmZ, startMs);
  const [eighthz] = useMetronome(bpmZ * 2, startMs);
  const [sixteenthz] = useMetronome(bpmZ * 2, startMs);
  const [thirtysecondz] = useMetronome(bpmZ * 2, startMs);

  return (
    <Flex direction="column" justify="space-between" align="center">
      <Text>{`BPM: ${beatsPerMinuteX}`}</Text>
      <Flex sx={{ ...sx }} {...props}>
        <Flasher label="whole" beatCount={whole.beatCount} />
        <Flasher label="half" beatCount={half.beatCount} />
        <Flasher label="quarter" beatCount={quarter.beatCount} />
        <Flasher label="eighth" beatCount={eighth.beatCount} />
        <Flasher label="sixteenth" beatCount={sixteenth.beatCount} />
        <Flasher label="thirtysecond" beatCount={thirtysecond.beatCount} />
      </Flex>
      <Text>{`BPM: ${bpmY}`}</Text>
      <Flex sy={{ ...sy }} {...props}>
        <Flasher label="whole" beatCount={wholey.beatCount} />
        <Flasher label="half" beatCount={halfy.beatCount} />
        <Flasher label="quarter" beatCount={quartery.beatCount} />
        <Flasher label="eighth" beatCount={eighthy.beatCount} />
        <Flasher label="sixteenth" beatCount={sixteenthy.beatCount} />
        <Flasher label="thirtysecond" beatCount={thirtysecondy.beatCount} />
      </Flex>
      <Text>{`BPM: ${bpmZ}`}</Text>
      <Flex sy={{ ...sz }} {...props}>
        <Flasher label="whole" beatCount={wholez.beatCount} />
        <Flasher label="half" beatCount={halfz.beatCount} />
        <Flasher label="quarter" beatCount={quarterz.beatCount} />
        <Flasher label="eighth" beatCount={eighthz.beatCount} />
        <Flasher label="sixteenth" beatCount={sixteenthz.beatCount} />
        <Flasher label="thirtysecond" beatCount={thirtysecondz.beatCount} />
      </Flex>
    </Flex>
  );
}

Metronome.defaultProps = {
  beatsPerMinuteX: 60,
  bpmY: 120,
  bpmZ: 240,
  sx: {},
  sy: {},
  sz: {},
};

Metronome.propTypes = {
  startMs: PropTypes.number.isRequired,
  sx: PropTypes.objectOf(PropTypes.any),
  sy: PropTypes.objectOf(PropTypes.any),
  sz: PropTypes.objectOf(PropTypes.any),
  beatsPerMinuteX: PropTypes.number,
  bpmY: PropTypes.number,
  bpmZ: PropTypes.number,
};

export { Metronome, Metronome as default };
