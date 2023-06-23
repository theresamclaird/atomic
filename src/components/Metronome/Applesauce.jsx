import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import { Flex } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
import tick from './metronome-85688.mp3';

function Applesauce() {
  const [beatsPerMinute, setBeatsPerMinute] = useState(60);
  const [startMs, setStartMs] = useState(null);
  const [state, setState] = useState({
    beatCount: 0,
  });
  const [play] = useSound(tick);

  useEffect(() => {
    if (!startMs) {
      return () => null;
    }

    const currentMs = new Date().getTime();
    const beatDurationMs = 60000 / beatsPerMinute;
    const beatCount = Math.floor((currentMs - startMs) / beatDurationMs);
    const elapsedMs = currentMs - startMs;
    const drift = elapsedMs - beatCount * beatDurationMs;

    const timeout = setTimeout(() => {
      setState({
        ...state,
        beatCount: Math.floor(beatCount),
      });
    }, beatDurationMs - drift);

    return () => {
      clearTimeout(timeout);
    };
  }, [beatsPerMinute, startMs, state]);

  useEffect(() => {
    play();
  }, [state, play]);

  return (
    <Flex direction="column" justify="space-between" align="center" gap={3} sx={{ m: 2 }}>
      <Flex as="form">
        <Text as="label">
          BPM:&nbsp;
          <input
            type="number"
            value={beatsPerMinute}
            onChange={e => setBeatsPerMinute(e.target.value)}
          />
        </Text>
        {startMs && <Button label="Stop" onClick={() => setStartMs(null)} />}
        {!startMs && <Button label="Start" onClick={() => setStartMs(new Date().getTime())} />}
      </Flex>
    </Flex>
  );
}

export { Applesauce, Applesauce as default };
