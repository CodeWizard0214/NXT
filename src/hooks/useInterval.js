import { useState, useEffect } from 'react';

const useInterval = (handler, interval, ...dependencies) => {
  const [intervalId, setIntervalId] = useState();
  useEffect(() => {
    const id = setInterval(handler, interval);
    setIntervalId(id);
    return () => clearInterval(id);
  }, [...dependencies]);
  return () => clearInterval(intervalId);
};

export default useInterval;
