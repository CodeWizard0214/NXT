import { motion } from 'framer-motion';

const BeCuriousImage = () => {
  const transition = {
    ease: 'linear',
    duration: 2,
    repeat: Infinity,
    repeatType: 'reverse'
  };

  const animate = { opacity: 1, rotate: -10 };
  const initial = { opacity: 0.5 };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="282"
      height="152"
      fill="none"
      viewBox="0 0 282 152">
      <motion.path
        initial={initial}
        animate={animate}
        transition={transition}
        fill="url(#a)"
        d="m263.33 61.95 15.412-10.423-34.091-50.24-15.412 10.423 34.091 50.24Z"
        opacity=".885"
      />
      <motion.path
        initial={initial}
        animate={animate}
        transition={transition}
        fill="url(#b)"
        d="m186.181 62.372 15.68-10.017L169.099 1.24l-15.68 10.017 32.762 51.114Z"
        opacity=".865"
      />
      <motion.path
        initial={initial}
        animate={animate}
        transition={transition}
        fill="url(#c)"
        d="m109.695 62.76 15.938-9.602L94.22 1.205l-15.937 9.603 31.412 51.953Z"
        opacity=".845"
      />
      <motion.path
        initial={initial}
        animate={animate}
        transition={transition}
        fill="url(#d)"
        d="m33.888 63.118 16.183-9.181L20.031 1.18 3.847 10.362l30.04 52.756Z"
      />
      <motion.path
        initial={initial}
        animate={animate}
        transition={transition}
        fill="url(#e)"
        d="m259.283 148.964 16.643-8.325-27.23-54.25-16.644 8.325 27.231 54.25Z"
        opacity=".847"
      />
      <motion.path
        initial={initial}
        animate={animate}
        transition={transition}
        fill="url(#f)"
        d="m182.112 149.572 16.857-7.887-25.801-54.943-16.856 7.887 25.8 54.943Z"
        opacity=".813"
      />
      <motion.path
        initial={initial}
        animate={animate}
        transition={transition}
        fill="url(#g)"
        d="m105.604 150.125 17.057-7.444-24.35-55.6-17.058 7.444 24.351 55.6Z"
        opacity=".748"
      />
      <motion.path
        initial={initial}
        animate={animate}
        transition={transition}
        fill="url(#h)"
        d="m29.777 150.635 17.246-6.995-22.886-56.217-17.246 6.995 22.886 56.217Z"
        opacity=".714"
      />
      <defs>
        <linearGradient
          id="a"
          x1="290.707"
          x2="226.746"
          y1="13.039"
          y2="11.899"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="214.067"
          x2="150.938"
          y1="13.394"
          y2="11.678"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="138.085"
          x2="75.812"
          y1="13.738"
          y2="11.464"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="62.775"
          x2="1.382"
          y1="14.071"
          y2="11.255"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="e"
          x1="286.622"
          x2="229.733"
          y1="97.78"
          y2="96.992"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="f"
          x1="209.912"
          x2="153.996"
          y1="98.444"
          y2="97.15"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="g"
          x1="133.854"
          x2="78.937"
          y1="99.07"
          y2="97.289"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="h"
          x1="58.47"
          x2="4.57"
          y1="99.676"
          y2="97.426"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BeCuriousImage;
