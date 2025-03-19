import { Context } from '@/components/Shared/Layout';
import useInterval from '@/hooks/useInterval';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import LoadingWord from './LoadingWord';

const Loading = () => {
  const [state, dispatch] = useContext(Context);

  const wordsList = ['Creativity', 'Design', 'Art Direction', 'Digital', 'Photography'];

  const [displayedWordIndex, setDisplayedWordIndex] = useState(0);

  useInterval(
    () => {
      setDisplayedWordIndex((displayedWordIndex + 1) % 5);
    },
    400,
    displayedWordIndex
  );

  useEffect(() => {
    setTimeout(function () {
      dispatch({ type: 'loadingAnimationFinished' });
    }, 5000);
  }, []);

  return (
    <motion.div
      animate={{
        y: state.loadingAnimationFinished ? '-100%' : '0%'
      }}
      transition={{ delay: 0.4, duration: 0.3 }}
      className="fixed top-0 left-0 z-50 h-full w-full overflow-hidden bg-black">
      <motion.div
        animate={{
          y: state.loadingAnimationFinished ? '-100%' : '0%',
          opacity: state.loadingAnimationFinished ? 0 : 1
        }}
        transition={{ duration: 0.3 }}
        className="flex h-full items-center justify-center space-x-2 font-g-light">
        <Image
          style={{ width: '84px' }}
          priority={true}
          src="/images/logos/nxtyou.png"
          alt="NXT YOU Logo"
          width="220"
          height="106"
        />
        <div className="w-36 text-sm md:mb-[0.4rem] md:text-lg">
          {wordsList.map((word, i) => (
            <LoadingWord index={i} displayedWordIndex={displayedWordIndex} key={i}>
              {word}
            </LoadingWord>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Loading;
