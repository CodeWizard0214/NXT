import { motion } from 'framer-motion';

const LoadingWord = ({ children, displayedWordIndex, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: displayedWordIndex === index ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className="absolute">
      {children}
    </motion.div>
  );
};

export default LoadingWord;
