import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { cubicInOut } from '@/utils/animation';

const ImageLoader = ({ src, className }) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Image
        src={src}
        alt=""
        width={569}
        height={353}
        className={`h-full w-full object-cover will-change-transform ${className}`}
        priority={true}
      />
    </div>
  );
};

const Gallery = ({ onAnimationComplete }) => {
  const centeredAnimationControls = useAnimation();
  const reversedAnimationControls = useAnimation();
  const edgeAnimationControls = useAnimation();

  const reversedInitial = { y: '-40%', height: '350%' };
  const edgeInitial = { y: '45%', height: '350%' };

  async function centeredSequence() {
    centeredAnimationControls.start({
      y: '0%',
      transition: {
        ease: cubicInOut,
        duration: 3
      }
    });
    centeredAnimationControls.start({
      height: '100%',
      transition: {
        ease: cubicInOut,
        duration: 1.5,
        delay: 0.9
      }
    });
  }

  async function reversedSequence() {
    reversedAnimationControls.start({
      y: '0%',
      transition: {
        ease: cubicInOut,
        duration: 3,
        delay: 0.32
      }
    });
    reversedAnimationControls.start({
      height: '100%',
      transition: {
        ease: cubicInOut,
        duration: 3,
        delay: 0.15
      }
    });
  }

  async function edgeSequence() {
    edgeAnimationControls.start({
      y: '0%',
      transition: {
        ease: cubicInOut,
        duration: 3,
        delay: 0.15
      }
    });
    edgeAnimationControls.start({
      height: '100%',
      transition: {
        ease: cubicInOut,
        duration: 3,
        delay: 0.35
      }
    });
  }

  useEffect(() => {
    centeredSequence();
    reversedSequence();
    edgeSequence();
  }, []);
  return (
    <div className="fixed z-50 flex h-screen w-full items-center justify-center">
      <motion.div
        onAnimationComplete={onAnimationComplete}
        initial={{ scale: 0.24 }}
        animate={{ scale: 1, opacity: 0 }}
        transition={{ duration: 2, delay: 2, ease: cubicInOut }}
        style={{ height: '561vh' }}
        className="z-50 flex flex-row will-change-transform">
        <div
          className="loader-column flex h-full flex-col justify-start py-0 will-change-transform"
          style={{ paddingRight: '7vh', paddingLeft: '7vh' }}>
          <motion.div
            initial={edgeInitial}
            animate={edgeAnimationControls}
            style={{ height: '350%', transform: 'translateY(45%)' }}
            className="flex shrink-0 grow-0 flex-col justify-between will-change-transform">
            <ImageLoader src="/images/mockups/projects/0.png" />
            <ImageLoader src="/images/mockups/projects/1.png" />
            <ImageLoader src="/images/mockups/projects/5.png" />
            <ImageLoader src="/images/mockups/projects/0.png" />
            <ImageLoader src="/images/mockups/projects/1.png" />
            <ImageLoader src="/images/mockups/projects/5.png" />
          </motion.div>
        </div>
        <div className="loader-column is-alt flex h-full flex-col justify-end px-[7vh] py-0 will-change-transform">
          <motion.div
            initial={reversedInitial}
            animate={reversedAnimationControls}
            style={{ height: '350%', transform: 'translateY(-40%)' }}
            className="flex shrink-0 grow-0 flex-col justify-between will-change-transform">
            <ImageLoader src="/images/mockups/projects/11.png" />
            <ImageLoader src="/images/mockups/projects/8.png" />
            <ImageLoader src="/images/mockups/projects/9.png" />
            <ImageLoader src="/images/mockups/projects/11.png" />
            <ImageLoader src="/images/mockups/projects/8.png" />
          </motion.div>
        </div>
        <div className="loader-column flex h-full flex-col justify-start px-[7vh] py-0 will-change-transform">
          <motion.div
            initial={{ y: '40%', height: '350%' }}
            animate={centeredAnimationControls}
            style={{ height: '350%', transform: 'translateY(-40%)' }}
            className="flex shrink-0 grow-0 flex-col justify-between will-change-transform">
            <ImageLoader src="/images/mockups/projects/18.png" />
            <ImageLoader src="/images/mockups/projects/14.png" />
            <ImageLoader src="/images/mockups/projects/12.png" className="origin-center" />
            <ImageLoader src="/images/mockups/projects/18.png" />
            <ImageLoader src="/images/mockups/projects/14.png" />
          </motion.div>
        </div>
        <div className="loader-column is-alt flex h-full flex-col justify-end px-[7vh] py-0 will-change-transform">
          <motion.div
            initial={reversedInitial}
            animate={reversedAnimationControls}
            style={{ height: '350%', transform: 'translateY(-40%)' }}
            className="flex shrink-0 grow-0 flex-col justify-between will-change-transform">
            <ImageLoader src="/images/mockups/projects/22.png" />
            <ImageLoader src="/images/mockups/projects/20.png" />
            <ImageLoader src="/images/mockups/projects/21.png" />
            <ImageLoader src="/images/mockups/projects/22.png" />
            <ImageLoader src="/images/mockups/projects/20.png" />
          </motion.div>
        </div>
        <div className="loader-column flex h-full flex-col justify-start px-[7vh] py-0 will-change-transform">
          <motion.div
            initial={edgeInitial}
            animate={edgeAnimationControls}
            style={{ height: '350%', transform: 'translateY(45%)' }}
            className="flex shrink-0 grow-0 flex-col justify-between will-change-transform">
            <ImageLoader src="/images/mockups/projects/4.png" />
            <ImageLoader src="/images/mockups/projects/1.png" />
            <ImageLoader src="/images/mockups/projects/2.png" />
            <ImageLoader src="/images/mockups/projects/3.png" />
            <ImageLoader src="/images/mockups/projects/4.png" />
            <ImageLoader src="/images/mockups/projects/1.png" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
