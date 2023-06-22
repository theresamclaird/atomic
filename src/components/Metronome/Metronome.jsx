import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '../Box';
import { Text } from '../Text';
import { useMetronome } from './useMetronome';
import { Flasher } from './Flasher';

function Metronome({ startMs, metronomeNumber, beatsPerMinutes, sx, ...props }) {
  const [whole] = useMetronome(beatsPerMinutes[metronomeNumber] / 4, startMs);
  const [half] = useMetronome(beatsPerMinutes[metronomeNumber] / 2, startMs);
  const [quarter] = useMetronome(beatsPerMinutes[metronomeNumber], startMs);
  const [eighth] = useMetronome(beatsPerMinutes[metronomeNumber] * 2, startMs);
  const [sixteenth] = useMetronome(beatsPerMinutes[metronomeNumber] * 4, startMs);
  const [thirtysecond] = useMetronome(beatsPerMinutes[metronomeNumber] * 8, startMs);

  const [whole1] = useMetronome(beatsPerMinutes[metronomeNumber + 1] / 4, startMs);
  const [half1] = useMetronome(beatsPerMinutes[metronomeNumber + 1] / 2, startMs);
  const [quarter1] = useMetronome(beatsPerMinutes[metronomeNumber + 1], startMs);
  const [eighth1] = useMetronome(beatsPerMinutes[metronomeNumber + 1] * 2, startMs);
  const [sixteenth1] = useMetronome(beatsPerMinutes[metronomeNumber + 1] * 4, startMs);
  const [thirtysecond1] = useMetronome(beatsPerMinutes[metronomeNumber + 1] * 8, startMs);

  const [whole2] = useMetronome(beatsPerMinutes[metronomeNumber + 2] / 4, startMs);
  const [half2] = useMetronome(beatsPerMinutes[metronomeNumber + 2] / 2, startMs);
  const [quarter2] = useMetronome(beatsPerMinutes[metronomeNumber + 2], startMs);
  const [eighth2] = useMetronome(beatsPerMinutes[metronomeNumber + 2] * 2, startMs);
  const [sixteenth2] = useMetronome(beatsPerMinutes[metronomeNumber + 2] * 4, startMs);
  const [thirtysecond2] = useMetronome(beatsPerMinutes[metronomeNumber + 2] * 8, startMs);

  /*
   * I want to be able to get the constants defined above as elements of the array as
   *  defined in the property types
   */
  // function GetBpmsFromMetronomeIndex(metronomeIndex) {
  //   return {
  //     metronomeWhole: useMetronome(beatsPerMinutes[metronomeIndex] / 4, startMs),
  //     metronomeHalf: useMetronome(beatsPerMinutes[metronomeIndex] / 2, startMs),
  //     metronomeQuarter: useMetronome(beatsPerMinutes[metronomeIndex], startMs),
  //     metronomeEighth: useMetronome(beatsPerMinutes[metronomeIndex] * 2, startMs),
  //     metronomeSixteenth: useMetronome(beatsPerMinutes[metronomeIndex] * 4, startMs),
  //     metronomeThirtysecond: useMetronome(beatsPerMinutes[metronomeIndex] * 8, startMs)
  //   };
  // }

  return (
    <Flex direction="column" justify="space-between" align="center">
      {/* Want to be able to specify one Flex object as an index of array constants obtained
       * from GetBpmsFromMetronomeIndex - and iterate over the array objects
       */}
      <Text>{`BPM: ${beatsPerMinutes[metronomeNumber]}`}</Text>
      <Flex sx={{ ...sx }} {...props}>
        <Flasher label="whole" beatCount={whole.beatCount} />
        <Flasher label="half" beatCount={half.beatCount} />
        <Flasher label="quarter" beatCount={quarter.beatCount} />
        <Flasher label="eighth" beatCount={eighth.beatCount} />
        <Flasher label="sixteenth" beatCount={sixteenth.beatCount} />
        <Flasher label="thirtysecond" beatCount={thirtysecond.beatCount} />
      </Flex>
      {/* The rest of this specification should go away and be addressed as part of iterating
       * through the array
       */}
      <Text>{`BPM: ${beatsPerMinutes[metronomeNumber + 1]}`}</Text>
      <Flex sx={{ ...sx }} {...props}>
        <Flasher label="whole" beatCount={whole1.beatCount} />
        <Flasher label="half" beatCount={half1.beatCount} />
        <Flasher label="quarter" beatCount={quarter1.beatCount} />
        <Flasher label="eighth" beatCount={eighth1.beatCount} />
        <Flasher label="sixteenth" beatCount={sixteenth1.beatCount} />
        <Flasher label="thirtysecond" beatCount={thirtysecond1.beatCount} />
      </Flex>
      <Text>{`BPM: ${beatsPerMinutes[metronomeNumber + 2]}`}</Text>
      <Flex sx={{ ...sx }} {...props}>
        <Flasher label="whole" beatCount={whole2.beatCount} />
        <Flasher label="half" beatCount={half2.beatCount} />
        <Flasher label="quarter" beatCount={quarter2.beatCount} />
        <Flasher label="eighth" beatCount={eighth2.beatCount} />
        <Flasher label="sixteenth" beatCount={sixteenth2.beatCount} />
        <Flasher label="thirtysecond" beatCount={thirtysecond2.beatCount} />
      </Flex>
    </Flex>
  );
}

Metronome.defaultProps = {
  metronomeNumber: 0,
  beatsPerMinutes: [60, 120, 240],
  sx: {},
};

Metronome.propTypes = {
  startMs: PropTypes.number.isRequired,
  metronomeNumber: PropTypes.number,
  sx: PropTypes.objectOf(PropTypes.any),
  // The following should be specified as array of numbers, not any.  How do you do that?
  beatsPerMinutes: PropTypes.array,
};

export { Metronome, Metronome as default };
