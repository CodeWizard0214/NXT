import { useEffect, useState } from 'react';

const useScrollPosition = (onChange) => {
  const [scrollYPosition, setscrollYPosition] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollPosition / totalHeight;
    if (onChange) {
      onChange(progress);
    }
    setscrollYPosition(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollYPosition;
};

export default useScrollPosition;
