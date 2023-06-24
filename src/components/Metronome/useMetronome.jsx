import { useState, useEffect } from 'react';

function useMetronome(beatsPerMinute, startMs) {
  const [state, setState] = useState({
    currentMs: null,
    beatDurationMs: 60000 / beatsPerMinute,
    beatCount: 0,
    drift: 0,
    driftHistory: [],
    averageDrift: 0,
  });

  useEffect(() => {
    const { beatDurationMs, driftHistory } = state;
    const currentMs = new Date().getTime();
    const beatCount = Math.floor((currentMs - startMs) / beatDurationMs);

    const elapsedMs = currentMs - startMs;
    const drift = elapsedMs - beatCount * beatDurationMs;

    const newDriftHistory = [...driftHistory];
    newDriftHistory.push(drift);
    const totalDrift = newDriftHistory.reduce((total, driftValue) => total + driftValue, 0);
    const averageDrift = totalDrift / newDriftHistory.length;

    const timeout = setTimeout(() => {
      setState({
        ...state,
        currentMs,
        beatCount: Math.floor(beatCount),
        drift,
        driftHistory: newDriftHistory,
        averageDrift,
      });
    }, beatDurationMs - drift);

    return () => {
      clearTimeout(timeout);
    };
  }, [beatsPerMinute, startMs, state]);

  return [state];
}

export { useMetronome, useMetronome as default };
