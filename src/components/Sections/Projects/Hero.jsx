import convertRange from '@/utils/convertRange';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const BlurShade = ({ children, mousePosition }) => {
  return (
    <motion.div
      className="relative flex flex-1 justify-center rounded-full p-20 will-change-transform"
      animate={{ translateX: `${mousePosition.x}vw`, translateY: `${mousePosition.y}vw` }}
      transition={{ duration: 0.2, ease: 'linear' }}
      style={{
        transformStyle: 'preserve-3d',
        backgroundImage:
          'radial-gradient(circle farthest-side at 0 0, #000, transparent),radial-gradient(circle farthest-corner at 50% 0, #1D2129, transparent 58%),radial-gradient(circle farthest-side at 100% 0, #49556B, transparent)'
      }}>
      {children}
    </motion.div>
  );
};

const Hero = ({ loaded }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mapNumberInRange = (number) => {
    const oldValue = number;
    const oldMin = 0;
    const oldMax = 100;
    const newMin = -5;
    const newMax = 5;

    const newValue = convertRange(oldValue, oldMin, oldMax, newMin, newMax);

    return newValue;
  };

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    setMousePosition({ x: mapNumberInRange(x), y: mapNumberInRange(y) });
  };

  return (
    <section>
      <div
        onMouseMove={handleMouseMove}
        className="relative flex items-center overflow-hidden px-6 pt-32 pb-32 sm:px-8 md:h-screen md:p-0 md:px-20 xl:px-32">
        <div
          style={{ width: '106.84vw' }}
          className="absolute inset-0 flex h-screen items-center justify-center">
          <div
            style={{ minHeight: '100vw', margin: '-10vw' }}
            className="flex flex-1 items-stretch justify-center">
            <BlurShade mousePosition={mousePosition}>
              <BlurShade mousePosition={mousePosition}>
                <BlurShade mousePosition={mousePosition}>
                  <BlurShade mousePosition={mousePosition}>
                    <BlurShade mousePosition={mousePosition}>
                      <BlurShade mousePosition={mousePosition}>
                        <BlurShade mousePosition={mousePosition}>
                          <BlurShade mousePosition={mousePosition}>
                            <BlurShade mousePosition={mousePosition}>
                              <BlurShade mousePosition={mousePosition}></BlurShade>
                            </BlurShade>
                          </BlurShade>
                        </BlurShade>
                      </BlurShade>
                    </BlurShade>
                  </BlurShade>
                </BlurShade>
              </BlurShade>
            </BlurShade>
          </div>
          <div
            className="absolute top-0 left-0 h-full w-full"
            style={{ background: 'rgba(0,0,0,.01)', backdropFilter: 'blur(100px)' }}></div>
        </div>

        <motion.div animate={{ opacity: loaded ? 0 : 1 }} transition={{ delay: 3, duration: 3 }}>
          <Image
            className="absolute top-0 left-0 h-full w-full object-cover"
            src="/images/mockups/projects/23.png"
            width={2880}
            height={1820}
            alt=""
          />

          <div
            style={{
              background:
                'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #020203 100%), linear-gradient(166.75deg, rgba(0, 0, 0, 0) 9.53%, #020203 91.7%), radial-gradient(143.89% 285.38% at 101.42% 58.13%, rgba(135, 156, 196, 0.71) 0%, rgba(0, 0, 0, 0) 99.99%, rgba(44, 44, 225, 0.71) 100%), rgba(2, 2, 3, 0.9)'
            }}
            className="absolute top-0 left-0 h-full w-full"></div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-7xl">
          <h1 className="max-w-6xl font-eurostar-extended text-4.5xl uppercase md:text-5xl lg:text-6xl xl:text-7.5xl">
            We make <span className="text-blue-gradient">brands</span> for{' '}
            <span className="text-blue-gradient">business</span>
          </h1>
          <p className="mt-6 max-w-2xl font-manrope text-xl text-dusty-gray">
            For us, our values are more than just words. These won’t be on any test, but they come
            from the heart and run deep through our culture.
          </p>
        </div>
      </div>

      <div className="px-6 py-12 sm:px-8 md:px-20 md:py-0 xl:px-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center text-center md:h-screen">
          <h2 className="flex-col text-3xl font-light sm:flex md:text-4xl md:font-semibold lg:text-5xl xl:text-6xl">
            <motion.span
              whileInView={{ backgroundPosition: '0 100%' }}
              className="fill-bg-gray leading-tight">
              NXTYOU is a digital design agency.
            </motion.span>{' '}
            <motion.span
              whileInView={{ backgroundPosition: '0 100%' }}
              transition={{ delay: 0.25 }}
              className="fill-bg-gray leading-tight">
              But first of all we are people who
            </motion.span>{' '}
            <motion.span
              whileInView={{ backgroundPosition: '0 100%' }}
              transition={{ delay: 0.5 }}
              className="fill-bg-gray leading-tight">
              love that they do.
            </motion.span>
          </h2>
          <button className="mt-5 rounded-full bg-white py-3 px-6 text-sm font-semibold uppercase text-black transition-all hover:bg-gallery md:mt-12">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
