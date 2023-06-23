import React, { useState, useEffect, useCallback } from 'react';
import useSound from 'use-sound';
import { Flex } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
import click from './click.mp3';
import clack from './clack.mp3';

function Applesauce() {
  const [beatsPerMinute, setBeatsPerMinute] = useState(120);
  const [startMs, setStartMs] = useState(null);
  const [beatCount, setBeatCount] = useState(0);
  const [playClick] = useSound(click);
  const [playClack] = useSound(clack);

  const playSound = useCallback(() => {
    if (beatCount % 4 === 0) {
      playClick();
    } else {
      playClack();
    }
    setBeatCount(() => beatCount + 1); // TODO drift > beatDurationMs?
  }, [beatCount, setBeatCount, playClick, playClack]);

  useEffect(() => {
    if (!startMs) {
      return () => null;
    }

    const currentMs = new Date().getTime();
    const elapsedMs = currentMs - startMs;
    const beatDurationMs = 60000 / beatsPerMinute;
    const drift = elapsedMs - beatCount * beatDurationMs;

    const timeout = setTimeout(() => {
      playSound();
    }, beatDurationMs - drift); // TODO drift > beatDurationMs?

    return () => {
      clearTimeout(timeout);
    };
  }, [beatsPerMinute, startMs, beatCount, playSound]);

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
        {startMs && (
          <Button
            label="Stop"
            onClick={() => {
              setBeatCount(0);
              setStartMs(null);
            }}
          />
        )}
        {!startMs && <Button label="Start" onClick={() => setStartMs(new Date().getTime())} />}
      </Flex>
    </Flex>
  );
}

export { Applesauce, Applesauce as default };
