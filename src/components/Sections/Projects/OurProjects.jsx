import useScrollPosition from '@/hooks/useScrollPosition';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import convertRange from '@/utils/convertRange';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const ProjectCard = ({ className, src, title, onMouseEnter, onMouseLeave, onMouseMove }) => {
  const scrollYProgress = useScrollPosition();
  return (
    <Link
      className={`relative mx-auto mt-5 block w-full overflow-hidden rounded-xl sm:w-fit md:mt-8 lg:m-0 ${className}`}
      href="#">
      <div
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(12, 14, 18, 0.7) 92.19%)'
        }}
        className="absolute top-0 left-0 h-full w-full"></div>

      <motion.div
        className="flex sm:block"
        animate={{ scale: scrollYProgress / 4 + 0.97 }}
        transition={{ duration: 0.8, ease: [9, 8, 7, 6] }}>
        <Image
          className="flex-1 rounded-xl"
          src={src}
          width={391}
          height={437}
          alt=""
          loading="eager"
          onMouseMove={onMouseMove}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </motion.div>
      <div className="absolute bottom-2 left-2 font-eurostar-extended text-sm uppercase">
        {title}
      </div>
    </Link>
  );
};

const OurProjects = () => {
  const scrollYProgress = useScrollPosition();

  const [isCustomCursor, setIsCustomCursor] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (isCustomCursor) {
      setMousePosition({ x: e.pageX, y: e.pageY });
    }
  };

  const handleMouseEnter = () => {
    setIsCustomCursor(true);
  };

  const handleMouseLeave = () => {
    setIsCustomCursor(false);
  };

  const { width } = useWindowDimensions();

  const mapNumberInRange = (number) => {
    const oldValue = number;
    const oldMin = 0.673;
    const oldMax = 0.705;
    const newMin = 1;
    const newMax = 0;

    const newValue = convertRange(oldValue, oldMin, oldMax, newMin, newMax);

    return newValue;
  };

  return (
    <section
      className="pt-16 md:pt-28 md:pb-4"
      style={{
        background:
          'linear-gradient(199.64deg, rgba(135, 156, 196, 0.2) -9.46%, rgba(0, 0, 0, 0) 86.85%'
      }}>
      <motion.div
        animate={{
          top: mousePosition.y,
          left: mousePosition.x,
          scale: isCustomCursor ? 1 : 0,
          x: '-50%',
          y: '-50%'
        }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white font-medium backdrop-blur-lg will-change-transform"
        style={{
          background: 'hsla(0,0%,100%,.1)'
        }}>
        VIEW
      </motion.div>
      <div className="top-52 z-10 lg:sticky">
        <h2
          style={{
            opacity: width >= 1024 ? mapNumberInRange(scrollYProgress) : 1
          }}
          className="max-w-lg px-6 font-eurostar-extended text-3xl uppercase sm:mx-auto sm:px-0 sm:text-center md:max-w-xl md:text-5xl lg:max-w-2xl lg:text-6xl">
          some of our{' '}
          <span
            className="text-blue-gradient inline-block"
            style={{
              transform: `translateX(${width >= 1024 ? Math.pow(scrollYProgress * 3, 5) : 0}px)`
            }}>
            projects.
          </span>
        </h2>
      </div>
      <div className="mt-7 px-6 pb-14 sm:px-8 md:px-20 lg:mt-16 lg:px-24 xl:px-48 2xl:px-52">
        <div className="mx-auto flex max-w-7xl flex-col items-center md:block">
          <div className="flex w-full flex-col justify-between sm:w-auto lg:flex-row">
            <ProjectCard
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              src="/images/mockups/projects/24.png"
              title="LANDINGPAGES"
            />
            <ProjectCard
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              className="md:translate-x-1/3 lg:translate-y-1/2 lg:translate-x-0 2xl:translate-x-1/3"
              src="/images/mockups/projects/25.png"
              title="BACKEND"
            />
          </div>
          <div className="flex w-full flex-col justify-between sm:w-auto  lg:mt-32 lg:flex-row">
            <ProjectCard
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              className="translate-x-0 md:-translate-x-1/3 lg:translate-x-0 2xl:translate-x-1/2"
              src="/images/mockups/projects/26.png"
              title="MOBILE APPS"
            />
            <ProjectCard
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              className=" md:translate-x-1/3 lg:translate-y-1/2 lg:translate-x-0"
              src="/images/mockups/projects/27.png"
              title="BRANDING"
            />
          </div>
          <ProjectCard
            className="md:-translate-x-1/3 lg:mt-40 lg:translate-x-0"
            src="/images/mockups/projects/28.png"
            title="SOFTWARE"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          />
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
