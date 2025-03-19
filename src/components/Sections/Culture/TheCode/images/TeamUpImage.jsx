import { motion } from 'framer-motion';

const TeamUpImage = () => {
  const transition = {
    ease: [0.1, 0.1, 0.1, 0.1],
    duration: 2,
    repeat: Infinity,
    repeatType: 'reverse'
  };
  const transition2 = {
    ...transition,
    ease: 'easeInOut'
  };
  const animate = { rotate: -20 };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="380"
      height="382"
      fill="none"
      viewBox="0 0 380 382">
      <motion.path
        animate={animate}
        transition={transition}
        fill="url(#a)"
        d="m204.083 3.035 4.191 375.446-32.747.365L171.336 3.4l32.747-.365Z"
        opacity=".723"
      />
      <motion.path
        animate={animate}
        transition={transition}
        fill="url(#b)"
        d="m133.995 10.953 141.999 347.553-30.382 12.412L103.613 23.365l30.382-12.412Z"
        opacity=".301"
      />
      <motion.path
        animate={animate}
        transition={transition}
        fill="url(#c)"
        d="m71.961 43.932 259.42 271.306-23.742 22.703L48.219 66.635 71.96 43.932Z"
        opacity=".334"
      />
      <motion.path
        animate={animate}
        transition={transition}
        fill="url(#d)"
        d="m26.49 97.058 340.44 157.968-13.815 29.774-340.44-157.968 13.816-29.774Z"
        opacity=".508"
      />
      <motion.path
        animate={animate}
        transition={transition}
        fill="#fff"
        d="m3.57 162.773 374.527 23.631-2.062 32.69L1.508 195.463l2.062-32.69Z"
      />
      <motion.path
        animate={animate}
        transition={transition}
        fill="url(#e)"
        d="M108.907 361.141 239.955 9.295l30.734 11.447-131.048 351.846-30.734-11.447Z"
        opacity=".676"
      />
      <motion.path
        animate={animate}
        transition={transition2}
        fill="url(#f)"
        d="M175.691 378.852 171.152 3.41l32.76-.396 4.54 375.442-32.761.396Z"
        opacity=".315"
      />
      <motion.path
        animate={animate}
        transition={transition2}
        fill="url(#g)"
        d="M244.326 371.3 104.797 22.76l30.477-12.2 139.529 348.539-30.477 12.201Z"
        opacity=".585"
      />
      <motion.path
        animate={animate}
        transition={transition2}
        fill="url(#h)"
        d="M310.123 335.901 46.129 69.064l23.353-23.103 263.993 266.837-23.352 23.103Z"
        opacity=".156"
      />
      <motion.path
        animate={animate}
        transition={transition2}
        fill="url(#i)"
        d="M356.997 277.687 10.091 134.504l12.52-30.33 346.906 143.182-12.52 30.331Z"
        opacity=".285"
      />
      <motion.path
        animate={animate}
        transition={transition}
        fill="url(#j)"
        d="M377.547 206.037 2.282 208.59l-.223-32.769 375.264-2.552.224 32.768Z"
        opacity=".286"
      />
      <motion.path
        animate={animate}
        transition={transition}
        fill="url(#k)"
        d="M368.849 132.382 23.647 279.678 10.76 249.481l345.203-147.297 12.885 30.198Z"
        opacity=".724"
      />
      <motion.path
        animate={animate}
        transition={transition}
        fill="url(#l)"
        d="m332.607 68.035-262.1 268.738-23.516-22.935 262.1-268.737 23.516 22.934Z"
        opacity=".228"
      />
      <motion.path
        animate={animate}
        transition={transition}
        fill="url(#m)"
        d="M274.681 22.693 135.39 371.349l-30.467-12.172L244.214 10.521l30.467 12.172Z"
        opacity=".08"
      />
      <motion.path
        animate={animate}
        transition={transition}
        fill="url(#n)"
        d="m204.083 3.035 4.191 375.446-32.747.365L171.336 3.4l32.747-.365Z"
        opacity=".115"
      />
      <defs>
        <linearGradient
          id="a"
          x1="224.689"
          x2="167.678"
          y1="62.97"
          y2="61.878"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="320.42"
          x2="93.187"
          y1="73.026"
          y2="70.375"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="396.925"
          x2="32.864"
          y1="101.828"
          y2="101.462"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="442.684"
          x2="-3.948"
          y1="145.122"
          y2="158.016"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="e"
          x1="293.074"
          x2="125.449"
          y1="71.997"
          y2="61.336"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="f"
          x1="251.407"
          x2="162.368"
          y1="67.182"
          y2="59.557"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="g"
          x1="344.314"
          x2="89.964"
          y1="88.297"
          y2="66.476"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="h"
          x1="411.711"
          x2="28.523"
          y1="120.002"
          y2="101.235"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="i"
          x1="447.898"
          x2="-6.712"
          y1="160.415"
          y2="167.948"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="j"
          x1="452.173"
          x2="3.539"
          y1="187.304"
          y2="266.134"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="k"
          x1="437.153"
          x2=".65"
          y1="136.962"
          y2="144.746"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="l"
          x1="385.18"
          x2="42.51"
          y1="95.69"
          y2="93.873"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="m"
          x1="304.222"
          x2="106.15"
          y1="69.888"
          y2="67.015"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="n"
          x1="224.689"
          x2="167.678"
          y1="62.97"
          y2="61.878"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset="1" stopColor="#6782B4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TeamUpImage;
