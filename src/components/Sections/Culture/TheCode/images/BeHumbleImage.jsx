import { motion } from 'framer-motion';

const BeHumblreImage = () => {
  const transition = {
    ease: 'linear',
    duration: 1,
    repeat: Infinity,
    repeatType: 'reverse',
    repeatDelay: 1
  };
  const animate = { scaleX: 1.2, transformOrigin: 'right' };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={221}
      height={139}
      fill="none"
      viewBox="0 0 221 139">
      <motion.path
        transition={transition}
        animate={animate}
        fill="url(#a)"
        d="M.673 356.667h34.615V46.617H.673v310.05Z"
      />
      <motion.path
        transition={transition}
        animate={animate}
        fill="url(#b)"
        d="M62.251 402.91h35.86V92.86H62.25v310.05Z"
      />
      <motion.path
        transition={transition}
        animate={animate}
        fill="url(#c)"
        d="M123.407 311.019h34.615V.969h-34.615v310.05Z"
      />
      <motion.path
        transition={transition}
        animate={animate}
        fill="url(#d)"
        d="M184.985 356.667h35.86V46.617h-35.86v310.05Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1="42.024"
          x2="-1.041"
          y1="95.572"
          y2="95.754"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset={1} stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="105.089"
          x2="60.476"
          y1="141.815"
          y2="142.009"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset={1} stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="164.758"
          x2="121.694"
          y1="49.924"
          y2="50.105"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset={1} stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="227.823"
          x2="183.21"
          y1="95.572"
          y2="95.767"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset={1} stopColor="#6782B4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BeHumblreImage;
