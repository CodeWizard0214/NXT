import ArrowLeftIcon from '@/components/Shared/Icons/ArrowLeft';
import ArrowRightIcon from '@/components/Shared/Icons/ArrowRight';
import SwipeButton from '@/components/Shared/SwipeButton';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Clients = () => {
  const logos = [
    {
      src: '/images/logos/clients/satn.svg',
      url: 'https://video.sat1.de/',
      width: '76',
      height: '21'
    },
    {
      src: '/images/logos/clients/gruender.svg',
      url: 'https://www.gruender.de/',
      width: '134',
      height: '23'
    },
    {
      src: '/images/logos/clients/business-punk.svg',
      url: 'https://www.business-punk.com/',
      width: '73',
      height: '34'
    },
    {
      src: '/images/logos/clients/prosieben.svg',
      url: 'https://video.prosieben.de/',
      width: '36',
      height: '34',
      className: 'w-16 md:w-auto'
    },
    {
      src: '/images/logos/clients/galileo.svg',
      url: 'https://www.galileo.tv/',
      width: '101',
      height: '18'
    },
    {
      src: '/images/logos/clients/award.svg',
      url: 'https://www.awwwards.com/',
      width: '105',
      height: '17'
    },
    {
      src: '/images/logos/clients/logo-founders.svg',
      url: 'https://founders-magazin.de/',
      width: '112',
      height: '25'
    }
  ];
  return (
    <section className="border-b border-t-2 border-white/10 bg-woodsmoke pb-9 pt-16 md:pb-16 lg:pt-8 lg:pb-20 xl:px-24">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="text-sm font-semibold tracking-[0.4em] text-white/50">FEATURED IN</div>
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
          initialSlide={0}
          centeredSlides
          grabCursor
          loop
          className="mt-12 w-full"
          breakpoints={{
            0: {
              slidesPerView: 2.25
            },
            640: {
              slidesPerView: 3.5
            },
            1024: {
              slidesPerView: 7,
              centeredSlides: false
            }
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: '.prevClient',
            nextEl: '.nextClient'
          }}>
          {logos.map(({ src, url, width, height, className = 'w-28 md:w-auto' }, i) => (
            <SwiperSlide key={i}>
              <Link
                aria-label="visit website"
                className="transition-opacity duration-500 hover:opacity-40"
                href={url}
                target='_blank'
              >
                <Image
                  className={`mx-auto ${className || ''}`}
                  width={width}
                  height={height}
                  src={src}
                  alt=""
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-8 flex items-center space-x-3 lg:hidden">
          <SwipeButton className="prevClient" icon={<ArrowLeftIcon />} />
          <SwipeButton className="nextClient" icon={<ArrowRightIcon />} />
        </div>
      </div>
    </section>
  );
};

export default Clients;
