import { motion } from 'framer-motion';
import Image from 'next/image';

const LogoStack = ({ url,  darker }) => {

  const lightColor = 'rgb(26 26 26)';
  const darkColor = 'rgb(13 13 13)';

  return (
    <div className="relative hover:brightness-200 flex h-28 w-28 items-center justify-center overflow-hidden rounded-[20px] md:h-36 md:w-36">
      <motion.div
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1
        }}
        transition={{ duration: 1.5 }}
        className={`absolute top-0 left-0 z-10 h-full w-full ${
          darker ? 'box-shadow-dark' : 'box-shadow-semi-light'
        }`}></motion.div>
      <div className="flex">
        <motion.div
          className="absolute left-0 right-0 top-0 h-full w-[56px] md:w-[72px] "
          initial={{
            y: 144,
            backgroundColor: !darker ? darkColor : lightColor
          }}
          whileInView={{
            y: 0,
            backgroundColor: darker ? darkColor : lightColor
          }}
          transition={{ duration: 0.25, ease: 'easeIn' }}
        />
        <motion.div
          className="absolute right-0 top-0 h-full w-[56px] md:w-[72px]"
          initial={{
            y: 144,
            backgroundColor: !darker ? darkColor : lightColor
          }}
          whileInView={{
            y: 0,
            backgroundColor: darker ? darkColor : lightColor
          }}
          transition={{ duration: 0.25, delay: 0.25, ease: 'easeIn' }}
        />
      </div>
      <motion.div
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1
        }}
        transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}>
        <img src={url} alt="" className="relative z-10 h-12 w-20" height="48" width="80" />
      </motion.div>
    </div>
  );
};

export default LogoStack;
