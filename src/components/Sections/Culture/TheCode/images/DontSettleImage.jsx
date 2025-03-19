import { motion } from 'framer-motion';

const transition = {
  ease: 'easeInOut',
  duration: 2,
  repeat: Infinity,
  repeatType: 'reverse'
};

const animate = { rotate: 15, y: 20 };

const DontSettleImage = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={378}
      height={146}
      fill="none"
      viewBox="0 0 378 146">
      <motion.path
        animate={animate}
        transition={{ ...transition, delay: 1.2 }}
        fill="url(#a)"
        d="m377.091 60.423-37.71-38.489-44.24 30.763 9.332 13.403 24.12-16.774-4.239 45.05 16.265 1.533 4.239-45.048 20.561 20.985 11.672-11.423Z"
      />
      <motion.path
        animate={animate}
        transition={{ ...transition, delay: 0.8 }}
        fill="url(#b)"
        d="m277.295 66.703-31.331-44.064-48.672 23.544 7.143 14.747 26.539-12.837-11.097 43.26 15.879 4.074 11.096-43.26 17.083 24.025 13.36-9.49Z"
      />
      <motion.path
        animate={animate}
        transition={{ ...transition, delay: 0.4 }}
        fill="url(#c)"
        d="m176.667 71.798-24.194-48.706-52.059 15.732 4.777 15.775 28.385-8.577-17.832 41.231 15.134 6.545 17.831-41.232 13.192 26.556 14.766-7.324Z"
      />
      <motion.path
        animate={animate}
        transition={transition}
        fill="url(#d)"
        d="M75.153 76.421 58.743 24.1 4.414 31.554l2.267 16.464 29.623-4.065-24.262 38.252 14.04 8.904 24.26-38.251 8.949 28.53 15.861-4.967Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1="393.693"
          x2="291.639"
          y1="34.924"
          y2="36.731"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset={1} stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="294.301"
          x2="193.877"
          y1="36.213"
          y2="36.215"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset={1} stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="193.95"
          x2="96.921"
          y1="36.912"
          y2="35.154"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset={1} stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="92.562"
          x2=".677"
          y1="37.669"
          y2="34.332"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset={1} stopColor="#6782B4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DontSettleImage;
