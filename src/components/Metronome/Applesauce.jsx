import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Interval } from './Interval';

function Applesauce() {
  const [active, setActive] = useState(false);
  const [interval] = useState(new Interval(120));

  useEffect(() => {
    if (active) {
      interval.start(() => console.log('tick'));
    } else {
      interval.stop();
    }
  }, [active, interval]);

  return <Button label={active ? 'stop' : 'start'} onClick={() => setActive(!active)} />;
}

export { Applesauce, Applesauce as default };
