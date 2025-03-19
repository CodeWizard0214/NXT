import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

const Card = ({ src, name, position }) => {
  return (
    <div>
      <div>
        <Image
          style={{
            filter:
              'drop-shadow(-62px -111px 51px rgba(224, 213, 219, 0.01)) drop-shadow(-35px -62px 43px rgba(224, 213, 219, 0.05)) drop-shadow(-16px -28px 32px rgba(224, 213, 219, 0.09)) drop-shadow(-4px -7px 17px rgba(224, 213, 219, 0.1)) drop-shadow(0px 0px 0px rgba(224, 213, 219, 0.1))'
          }}
          className="w-full"
          src={src}
          width="349"
          height="411"
          alt=""
        />
      </div>
      <div className="mt-9 flex items-start md:mt-14">
        <h3
          style={{ maxWidth: '10rem' }}
          className="max-w-[13rem] font-eurostar-extended text-lg uppercase">
          {name}
        </h3>
        <div className="flex space-x-2">
          <span className="bg-blue-gradient mt-1 inline-block h-1.5 w-1.5 rounded-full"></span>
          <span className="text-2xs font-medium">{position}</span>
        </div>
      </div>
    </div>
  );
};

const BehindBrand = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isCustomCursor, setIsCustomCursor] = useState(false);

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

  return (
    <section className="overflow-hidden md:py-20">
      <motion.div
        className="pointer-events-none absolute z-10 hidden md:block"
        initial={{ scale: 0 }}
        animate={{ scale: isCustomCursor ? 1 : 0 }}
        style={{
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          top: mousePosition.y,
          left: mousePosition.x,
          x: '-50%',
          y: '-50%'
        }}>
        <div
          className="absolute top-0 h-24 w-24 rounded-full bg-white"
          style={{ filter: 'blur(18px)' }}></div>
        <motion.div className="absolute flex h-24 w-24 items-center justify-center rounded-full bg-white font-medium">
          <span className="text-black">DRAG</span>
          <svg
            className="absolute -left-4 top-1/2 -translate-x-1/2"
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="10"
            fill="none"
            viewBox="0 0 6 10">
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M5.707.293a1 1 0 0 1 0 1.414L2.414 5l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            className="absolute -right-4 top-1/2 -translate-x-1/2"
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.293031 9.70741C0.10556 9.51988 0.000244141 9.26557 0.000244141 9.00041C0.000244141 8.73524 0.10556 8.48094 0.293031 8.29341L3.58603 5.00041L0.293031 1.70741C0.110873 1.5188 0.0100779 1.2662 0.0123563 1.00401C0.0146347 0.741809 0.119804 0.490997 0.305212 0.305589C0.49062 0.120181 0.741433 0.0150115 1.00363 0.0127331C1.26583 0.0104547 1.51843 0.111249 1.70703 0.293408L5.70703 4.29341C5.8945 4.48094 5.99982 4.73524 5.99982 5.00041C5.99982 5.26557 5.8945 5.51988 5.70703 5.70741L1.70703 9.70741C1.5195 9.89488 1.26519 10.0002 1.00003 10.0002C0.734866 10.0002 0.480558 9.89488 0.293031 9.70741Z"
              fill="white"
            />
          </svg>
        </motion.div>
      </motion.div>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-20 md:text-center">
        <h2 className="font-eurostar-extended text-4.5xl md:text-6xl">
          BEHIND THE <span className="text-blue-gradient">BRAND.</span>
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm font-medium text-silver-chalice md:mt-7 md:text-xl">
          Wir lieben die Zusammenarbeit mit Marken, die unsere Vision teilen, etwas wirklich
          Einzigartiges und Außergewöhnliches zu schaffen.
        </p>
      </div>
      <div
        className="z-50 mt-16 md:mt-28 md:cursor-none"
        onPointerEnter={handleMouseEnter}
        onPointerLeave={handleMouseLeave}
        onPointerMove={handleMouseMove}>
        <Swiper
          slidesPerView={3.5}
          spaceBetween={53}
          style={{ overflow: 'inherit !important' }}
          className={`!px-6 sm:!px-8 md:!px-8 xl:!px-32`}
          breakpoints={{
            0: {
              slidesPerView: 1.15,
              spaceBetween: 38
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 53
            },
            1024: {
              slidesPerView: 3.5
            }
          }}>
          <SwiperSlide className="md:mt-32">
            <Card
              src="/images/photos/behind-brand/clemens.png"
              name="Clemens Kauschke"
              position="CEO & FOUNDER"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              src="/images/photos/behind-brand/richter.png"
              name="Clemens Kauschke"
              position="CEO & FOUNDER"
            />
          </SwiperSlide>
          <SwiperSlide className="md:mt-32">
            <Card
              src="/images/photos/behind-brand/clemens-2.png"
              name="Clemens Kauschke"
              position="CEO & FOUNDER"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              src="/images/photos/behind-brand/richter-2.png"
              name="Clemens Kauschke"
              position="CEO & FOUNDER"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default BehindBrand;
