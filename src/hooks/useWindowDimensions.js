import { useIsomorphicLayoutEffect } from 'framer-motion';
import { useState } from 'react';

const useWindowDimensions = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useIsomorphicLayoutEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', () => {
      updateSize();
    });
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

export default useWindowDimensions;
