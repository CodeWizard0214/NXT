const convertRange = (oldValue, oldMin, oldMax, newMin, newMax) =>
  ((oldValue - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin;

export default convertRange;
