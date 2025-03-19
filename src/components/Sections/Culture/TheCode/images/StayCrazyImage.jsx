import { motion } from 'framer-motion';

const StayCrazyImage = () => {
  const transition = {
    ease: 'linear',
    duration: 1,
    repeat: Infinity,
    repeatType: 'reverse'
  };
  const initial = { scale: 0.8, opacity: 0.05 };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={373}
      height={95}
      fill="none"
      viewBox="0 0 373 95">
      <motion.path
        initial={initial}
        animate={{ scale: 1, opacity: 0.443074 }}
        transition={transition}
        fill="url(#a)"
        d="M325.484 94.694c26.07 0 47.202-21.198 47.202-47.347C372.686 21.2 351.554 0 325.484 0c-26.069 0-47.203 21.199-47.203 47.347 0 26.149 21.134 47.347 47.203 47.347Z"
      />
      <motion.path
        initial={initial}
        animate={{ scale: 1, opacity: 0.531266 }}
        transition={transition}
        fill="url(#b)"
        d="M228.569 93.255c25.275 0 45.765-20.552 45.765-45.905s-20.49-45.905-45.765-45.905c-25.274 0-45.764 20.552-45.764 45.905s20.49 45.905 45.764 45.905Z"
      />
      <motion.path
        initial={initial}
        animate={{ scale: 1, opacity: 0.795031 }}
        transition={{ ...transition, delay: 1 }}
        fill="url(#c)"
        d="M131.661 80.932c18.492 0 33.484-15.038 33.484-33.587 0-18.55-14.992-33.587-33.484-33.587-18.493 0-33.485 15.037-33.485 33.587 0 18.55 14.992 33.587 33.485 33.587Z"
      />
      <motion.path
        initial={initial}
        animate={{ scale: 1 }}
        transition={{ ...transition, delay: 1 }}
        fill="url(#d)"
        d="M34.748 82.202c19.191 0 34.749-15.605 34.749-34.855 0-19.25-15.558-34.855-34.749-34.855C15.558 12.492 0 28.098 0 47.347c0 19.25 15.557 34.855 34.748 34.855Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1="391.058"
          x2="273.771"
          y1="14.952"
          y2="19.365"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset={1} stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="292.147"
          x2="178.432"
          y1="15.941"
          y2="20.22"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset={1} stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="178.178"
          x2="94.977"
          y1="24.364"
          y2="27.495"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset={1} stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="83.021"
          x2="-3.32"
          y1="23.499"
          y2="26.748"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset={1} stopColor="#6782B4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default StayCrazyImage;
