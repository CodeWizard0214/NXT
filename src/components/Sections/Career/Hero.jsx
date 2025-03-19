import { Context } from '@/components/Shared/Layout';
import { motion } from 'framer-motion';
import { useContext, useEffect } from 'react';
import ArrowRightUpIcon from '@/components/Shared/Icons/ArrowRightUp';
import SmoothScrollLink from '@/components/Shared/smooth';
//import { useRouter } from 'next/router';

//const router = useRouter();


const CornerDot = ({ style }) => {
  return (
    <div
      className="absolute h-1 w-1 bg-white"
      style={{ ...style, boxShadow: '0 0 0 1px #666' }}></div>
  );
};

const Hero = () => {
  const [{ loadingAnimationFinished }] = useContext(Context);

  const blurCircleVariants = {
    visible: {
      x: loadingAnimationFinished ? 100 : 0,
      transition: { repeatType: 'reverse', ease: 'linear', repeat: 1, duration: 0.75, delay: 3 }
    }
  };

  useEffect(() => {
    // const { email } = router.query;
    // console.log(email,"EMAIL WWW")
  }, [])

  return (
    <div className='relative' id="hero">
      <div className='relative z-5'>
        <video
          muted
          loop
          autoPlay
          poster="/images/thumbnails/homepage_hero_video.png"
          className="w-full object-cover absolute md:max-h-[43rem] z-[-1]"
          style={{ aspectRatio: '3000/1876' }}
        >
          <source
            src="/videos/hero.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <section
        className="flex relative items-center  px-6 pt-32 pb-24 sm:px-8 md:h-screen md:max-h-[43rem] md:px-20 md:py-0 z-10 tracking-[-0.04em]"
      >
        <div className="">
          <h1 className="mx-auto max-w-xl text-4xl !leading-relaxed md:!leading-tight lg:max-w-6xl lg:text-6xl uppercase font-Bank-Sans font-bold">
            <span>Let’s build something</span><br />
            <span className='text-blue-gradient'>awesome together.</span>
          </h1>
          <p className="mt-4 max-w-lg font-inter text-sm font-medium text-[#DCDCDC] md:mt-6  md:text-lg md:font-normal lg:max-w-2xl">
            We are looking for thinkers, creatives and engineers on a mission to ‘crack the process’ of bringing ideas to reality by building truly meaningful solutions.
          </p>
          <SmoothScrollLink href='#hero'>
            <button className="mt-5 rounded-full bg-white py-3 px-6 text-sm font-semibold text-black transition-all hover:bg-gallery flex gap-2 items-center">
              Current openings
              <ArrowRightUpIcon />
            </button>
          </SmoothScrollLink>
        </div>
      </section>
      <div
        className='absolute flex h-[100%] bottom-0 w-full z-0'
        style={{ background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.4) 80%, rgba(0, 0, 0, 1) 100%), linear-gradient(166.75deg, rgba(0, 0, 0, 0) 9.53%, rgba(2, 2, 3, 0.4) 91.7%), radial-gradient(143.89% 285.38% at 101.42% 58.13%, rgba(135, 156, 196, 0.4) 0%, rgba(0, 0, 0, 0) 99.99%)` }}
      ></div>
    </div>
  );
};

export default Hero;
