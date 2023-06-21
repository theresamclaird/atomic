import { useState, useEffect } from 'react';

function useMetronome(beatsPerMinute) {
  const [state, setState] = useState({
    startMs: new Date().getTime(),
    currentMs: null,
    beatDurationMs: 60000 / beatsPerMinute,
    beatCount: 0,
    drift: 0,
  });

  useEffect(() => {
    const { startMs, beatDurationMs } = state;
    const currentMs = new Date().getTime();
    const beatCount = Math.floor((currentMs - startMs) / beatDurationMs);

    const elapsedMs = currentMs - startMs;
    const drift = elapsedMs - beatCount * beatDurationMs;

    const timeout = setTimeout(() => {
      setState({
        ...state,
        currentMs,
        beatCount: Math.floor(beatCount),
        drift,
      });
    }, beatDurationMs - drift);

    return () => {
      clearTimeout(timeout);
    };
  }, [beatsPerMinute, state]);

  return [state];
}

export { useMetronome, useMetronome as default };
