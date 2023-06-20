import { useState, useRef, useEffect } from 'react';

function useHover() {
  const [hover, setHover] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return [ref, hover];
}

export { useHover, useHover as default };
