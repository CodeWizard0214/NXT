import { useParallax } from 'react-scroll-parallax';
import Image from 'next/image';
import ArrowRightUpIcon from '@/components/Shared/Icons/ArrowRightUp';
import SmoothScrollLink from '@/components/Shared/smooth';

const Culture = () => {
  const parallax1 = useParallax({
    translateY: ["10", "-60", "linear"],
  });
  const parallax2 = useParallax({
    translateY: ["10", "-60", "linear"],
    //translateX: ["-10", "10", "linear"],
  });

  const parallax3 = useParallax({
    translateY: ["10", "-60", "linear"],
    // translateX: ["20", "0", "linear"],
  });

  const parallax4 = useParallax({
    translateY: ["10", "-60", "linear"],
  });

  return (
    <section className="px-6 pt-16 pb-8 md:pb-28 font-inter sm:px-8 md:px-20 xl:px-32">
      <div className="mx-auto max-w-7xl text-center ">
        <h2 className="text-4xl md:text-5xl font-bold uppercase text-center font-Bank-Sans tracking-[-0.04em]">The <span className=" text-blue-gradient">new way </span>of work.</h2>
        <p className="mx-auto mt-4 max-w-lg font-inter text-sm font-medium text-dusty-gray md:mt-4 md:text-lg md:font-medium tracking-[0.01em]">
          As young entrepreneurs we looked at the way traditional agencies work and quickly realized that it is no longer a fit with today’s market dynamics.
        </p>
        <div className='flex mt-8 sm:mt-12'>
          <div className='flex flex-col flex-[0.5] sm:flex-1'>
            <div className='flex-1'>
              <div className='relative z-0' >
                <Image
                  ref={parallax1.ref}
                  className="rounded-[4px] absolute top-[40px] sm:top-[70px] right-[-30px] sm:right-[20px]"
                  src="/images/photos/culture/26.png"
                  width="186"
                  height="280"
                  alt="Clemens Kauscke"
                />
              </div>
            </div>
            <div className='flex-1'>
              <div className='relative z-10'>
                <Image
                  ref={parallax2.ref}
                  className="rounded-[5px] absolute top-[85px] sm:top-[185px] right-[-25px] md:right-[-125px]"
                  src="/images/photos/culture/27.png"
                  width="334"
                  height="223"
                  alt="Clemens Kauscke"
                />
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <div className='relative z-0'>
              <Image
                className="rounded-[6px]"
                src="/images/photos/culture/25.png"
                width="458"
                height="612"
                alt="Clemens Kauscke"
              />
            </div>
          </div>
          <div className='flex-[0.5] sm:flex-1 flex flex-col'>
            <div className='relative z-0 sm:z-10 flex-1'>
              <Image
                ref={parallax3.ref}
                className="rounded-[5px] absolute top-[20px] sm:top-[70px] left-[-30px] sm:left-[-60px]"
                src="/images/photos/culture/28.png"
                width="298"
                height="167"
                alt="Clemens Kauscke"
              />
            </div>
            <div className='relative flex-1'>
              <Image
                ref={parallax4.ref}
                className="rounded-[5px] absolute left-[-10px] sm:left-[40px] top-[50px] sm:top-[185px]"
                src="/images/photos/culture/29.png"
                width="227"
                height="342"
                alt="Clemens Kauscke"
              />
            </div>
          </div>
        </div>
        <div className='mt-[50px] sm:mt-[185px]'>
          <SmoothScrollLink href='#hero'>
            <button className="text-center mx-auto mt-5 rounded-full bg-white py-3 px-6 text-sm font-semibold uppercase text-black transition-all hover:bg-gallery flex gap-2 items-center">
              Current openings
              <ArrowRightUpIcon />
            </button>
          </SmoothScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Culture;