import ArrowLeftIcon from '@/components/Shared/Icons/ArrowLeft';
import ArrowRightIcon from '@/components/Shared/Icons/ArrowRight';
import Link from 'next/link';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Image from 'next/image';

const Tools = () => {
  const logos = [
    {
      src: '/images/logos/tools/photoshop.svg',
      width: '63',
      height: '54'
    },
    {
      src: '/images/logos/tools/slack.svg',
      width: '33',
      height: '33'
    },
    {
      src: '/images/logos/tools/premiere.svg',
      width: '61',
      height: '54'
    },
    {
      src: '/images/logos/tools/figma.svg',
      width: '56',
      height: '70'
    },
    {
      src: '/images/logos/tools/lightroom.svg',
      width: '59',
      height: '53'
    },
    {
      src: '/images/logos/tools/reddit.svg',
      width: '59',
      height: '56'
    },
    {
      src: '/images/logos/tools/aftereffect.svg',
      width: '70',
      height: '54'
    }
  ];
  return (
    <div className="overflow-x-hidden border-b border-t-2 border-white/10 bg-woodsmoke py-8">
      <div className="flex flex-col items-center lg:hidden">
        <div className="text-sm font-semibold tracking-[0.4em] text-white/50">APPS WE USE</div>
        <svg
          className="mt-2"
          xmlns="http://www.w3.org/2000/svg"
          width="47"
          height="2"
          fill="none"
          viewBox="0 0 47 2">
          <path
            stroke="url(#a)"
            strokeDasharray="1.5 1.5"
            d="M.968 1h45.063"
            opacity="0.5"></path>
          <defs>
            <linearGradient
              id="a"
              x1="54.8"
              x2="54.8"
              y1="1"
              y2="1"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#B1BFD8"></stop>
              <stop offset="1" stopColor="#6782B4"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Swiper
        wrapperClass="items-center"
        initialSlide={3}
        centeredSlides
        loopedSlides={3}
        grabCursor
        loop
        modules={[Autoplay]}
        speed={1000}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        className="w-full"
        breakpoints={{
          0: {
            slidesPerView: 4
          },
          640: {
            slidesPerView: 5
          },
          1024: {
            slidesPerView: 7,
            centeredSlides: false,
            grabCursor: false
          }
        }}>
        {logos.map(({ src, width, height, className = 'w-28 md:w-auto' }, i) => (
          <SwiperSlide className="py-8" key={i}>
            <div className="black-box mx-auto flex h-16 w-16 items-center justify-center rounded-2xl transition-opacity duration-500 hover:opacity-40">
              <Image src={src} width={width} height={height} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Tools;
