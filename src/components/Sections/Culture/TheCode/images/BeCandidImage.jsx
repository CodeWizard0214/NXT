import { motion } from 'framer-motion';

const BeCandidImage = () => {
  const transition = {
    ease: 'easeInOut',
    duration: 2,
    repeat: Infinity,
    repeatType: 'reverse'
  };
  const animate = { rotate: 7.5 };
  const initial = { rotate: -7.5 };

  return (
    <svg
      width={260}
      height={138}
      viewBox="0 0 260 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <motion.g initial={initial} animate={animate} transition={transition} opacity="0.05">
        <path
          d="M120.86 70.4024C119.768 107.343 89.0731 136.407 52.3022 135.319C31.0888 134.692 12.4872 124.166 0.754161 108.279C15.1758 97.5434 33.3195 84.0368 54.2807 68.4331C43.086 58.9821 21.6513 40.8861 3.29213 25.3865C15.9448 10.2832 35.0955 0.921034 56.2591 1.54703C93.0301 2.63466 121.953 33.4622 120.86 70.4024Z"
          fill="url(#paint0_linear_195_357)"
        />
        <path
          d="M120.86 70.4024C119.768 107.343 89.0731 136.407 52.3022 135.319C31.0888 134.692 12.4872 124.166 0.754161 108.279C15.1758 97.5434 33.3195 84.0368 54.2807 68.4331C43.086 58.9821 21.6513 40.8861 3.29213 25.3865C15.9448 10.2832 35.0955 0.921034 56.2591 1.54703C93.0301 2.63466 121.953 33.4622 120.86 70.4024Z"
          fill="url(#paint1_linear_195_357)"
        />
      </motion.g>
      <motion.g initial={initial} animate={animate} transition={transition} opacity="0.1">
        <path
          d="M149.168 69.9023C148.386 106.85 117.936 136.171 81.1577 135.393C59.9398 134.943 41.2504 124.575 29.3843 108.787C43.7152 97.9303 61.7448 84.2718 82.5741 68.4924C71.3004 59.1359 49.7144 41.2206 31.2257 25.8758C43.751 10.6667 62.8223 1.144 83.9905 1.59215C120.769 2.3708 149.95 32.9542 149.168 69.9023Z"
          fill="url(#paint2_linear_195_357)"
        />
        <path
          d="M149.168 69.9023C148.386 106.85 117.936 136.171 81.1577 135.393C59.9398 134.943 41.2504 124.575 29.3843 108.787C43.7152 97.9303 61.7448 84.2718 82.5741 68.4924C71.3004 59.1359 49.7144 41.2206 31.2257 25.8758C43.751 10.6667 62.8223 1.144 83.9905 1.59215C120.769 2.3708 149.95 32.9542 149.168 69.9023Z"
          fill="url(#paint3_linear_195_357)"
        />
      </motion.g>
      <motion.g initial={initial} animate={animate} transition={transition} opacity="0.2">
        <path
          d="M181.853 69.4425C181.353 106.395 151.128 135.948 114.344 135.449C93.1234 135.162 74.3556 124.936 62.3695 109.239C76.6173 98.2734 94.5422 84.4779 115.251 68.5403C103.906 59.2699 82.1841 41.5196 63.5789 26.3163C75.988 11.0121 94.9861 1.34435 116.157 1.63116C152.941 2.12947 182.354 32.4896 181.853 69.4425Z"
          fill="url(#paint4_linear_195_357)"
        />
        <path
          d="M181.853 69.4425C181.353 106.395 151.128 135.948 114.344 135.449C93.1234 135.162 74.3556 124.936 62.3695 109.239C76.6173 98.2734 94.5422 84.4779 115.251 68.5403C103.906 59.2699 82.1841 41.5196 63.5789 26.3163C75.988 11.0121 94.9861 1.34435 116.157 1.63116C152.941 2.12947 182.354 32.4896 181.853 69.4425Z"
          fill="url(#paint5_linear_195_357)"
        />
      </motion.g>
      <motion.g initial={initial} animate={animate} transition={transition} opacity="0.4">
        <path
          d="M214.251 69.0823C213.985 106.038 183.949 135.781 147.163 135.517C125.941 135.364 107.108 125.258 95.0224 109.637C109.2 98.5815 127.037 84.6724 147.644 68.6034C136.24 59.4054 114.406 41.7936 95.7047 26.7088C108.016 11.326 126.953 1.53768 148.125 1.6899C184.911 1.95438 214.517 32.1269 214.251 69.0823Z"
          fill="url(#paint6_linear_195_357)"
        />
        <path
          d="M214.251 69.0823C213.985 106.038 183.949 135.781 147.163 135.517C125.941 135.364 107.108 125.258 95.0224 109.637C109.2 98.5815 127.037 84.6724 147.644 68.6034C136.24 59.4054 114.406 41.7936 95.7047 26.7088C108.016 11.326 126.953 1.53768 148.125 1.6899C184.911 1.95438 214.517 32.1269 214.251 69.0823Z"
          fill="url(#paint7_linear_195_357)"
        />
      </motion.g>
      <motion.path
        initial={initial}
        animate={animate}
        transition={transition}
        d="M259.827 68.7876C259.732 105.744 229.833 135.626 193.046 135.531C171.823 135.476 152.945 125.456 140.787 109.891C154.914 98.7705 172.686 84.7793 193.219 68.6156C181.773 59.4702 159.858 41.9591 141.087 26.9606C153.328 11.5214 172.219 1.64588 193.392 1.70056C230.179 1.79556 259.923 31.8314 259.827 68.7876Z"
        fill="url(#paint8_linear_195_357)"
      />
      <motion.path
        initial={initial}
        animate={animate}
        transition={transition}
        d="M259.827 68.7876C259.732 105.744 229.833 135.626 193.046 135.531C171.823 135.476 152.945 125.456 140.787 109.891C154.914 98.7705 172.686 84.7793 193.219 68.6156C181.773 59.4702 159.858 41.9591 141.087 26.9606C153.328 11.5214 172.219 1.64588 193.392 1.70056C230.179 1.79556 259.923 31.8314 259.827 68.7876Z"
        fill="url(#paint9_linear_195_357)"
      />
      <path
        d="M207.521 41.7229C214.487 41.7409 220.148 36.0729 220.166 29.0633C220.184 22.0537 214.552 16.3565 207.587 16.3385C200.621 16.3205 194.959 21.9885 194.941 28.9981C194.923 36.0078 200.555 41.7049 207.521 41.7229Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_195_357"
          x1="59.2907"
          y1="129.556"
          x2="62.9837"
          y2="4.70236"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#661E5A" stopOpacity="0.5" />
          <stop offset="0.5" stopColor="#852174" stopOpacity="0.75" />
          <stop offset={1} stopColor="#A3258E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_195_357"
          x1="59.2907"
          y1="129.556"
          x2="62.9837"
          y2="4.70236"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#661E5A" stopOpacity="0.5" />
          <stop offset="0.5" stopColor="#852174" stopOpacity="0.75" />
          <stop offset={1} stopColor="#A3258E" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_195_357"
          x1="88.2682"
          y1="129.574"
          x2="90.912"
          y2="4.69448"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#661E5A" stopOpacity="0.5" />
          <stop offset="0.5" stopColor="#852174" stopOpacity="0.75" />
          <stop offset={1} stopColor="#A3258E" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_195_357"
          x1="173.277"
          y1="24.6183"
          x2="25.4018"
          y2="26.4461"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset={1} stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_195_357"
          x1="121.403"
          y1="129.577"
          x2="123.095"
          y2="4.68055"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#661E5A" stopOpacity="0.5" />
          <stop offset="0.5" stopColor="#852174" stopOpacity="0.75" />
          <stop offset={1} stopColor="#A3258E" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_195_357"
          x1="205.617"
          y1="23.9761"
          x2="57.7595"
          y2="26.931"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset={1} stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_195_357"
          x1="154.021"
          y1="129.598"
          x2="154.919"
          y2="4.69396"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#661E5A" stopOpacity="0.5" />
          <stop offset="0.5" stopColor="#852174" stopOpacity="0.75" />
          <stop offset={1} stopColor="#A3258E" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_195_357"
          x1="237.725"
          y1="23.4657"
          x2="89.8893"
          y2="27.3605"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset={1} stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_195_357"
          x1="283.091"
          y1="23.0634"
          x2="135.275"
          y2="27.6392"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset={1} stopColor="#6782B4" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_195_357"
          x1="283.091"
          y1="23.0634"
          x2="135.275"
          y2="27.6392"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B1BFD8" />
          <stop offset={1} stopColor="#6782B4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BeCandidImage;
