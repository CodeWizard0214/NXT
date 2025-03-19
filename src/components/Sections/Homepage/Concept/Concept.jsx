import Wheel from '@/components/Shared/Wheel';
import ConceptCard from './ConceptCard';
import Quote from './Quote';
import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { useEffect, useRef, useState } from 'react';

import Lottie from "lottie-react";
import seperatorAnimation from "@/components/Shared/seperator.json";

const Concept = () => {
  
  const cards = [
    {
      title: 'Qualified experts',
      description: 'Request as many designs as you want whenever you want. I’ll then finish them in order. One flat monthly fee, and I’m all yours.',
      icon: '/images/icons/concept/infinity.svg'
    },
    {
      title: 'Rapid Delivery',
      description:
        'Stop waiting weeks for your designs. On average your design will be ready within a few business days. I work Monday to Friday.',
      icon: '/images/icons/concept/energy.svg',
      hideOnSmallScreens: true
    },
    {
      title: 'Uniquely Yours',
      description: 'Every design is made for you and you only. No outsourcing and always high quality designs.',
      icon: '/images/icons/concept/diamond.svg'
    },
    {
      title: 'Flexible',
      description:
        'Freeze and activate your subscription however you like. No long term contracts.',
      icon: '/images/icons/concept/settings.svg'
    }
  ];

  const { width } = useWindowDimensions();

  return (
    <section className="relative overflow-hidden lg:px-24 lg:pt-44">
      <ConceptHeading className="mb-[50rem] max-w-lg px-6 text-3xl sm:px-8 md:max-w-xl md:px-20 md:text-4xl lg:mb-0 lg:hidden lg:p-0" />

      <div className="absolute top-40 -left-[20rem] sm:-left-[15rem] lg:top-24 lg:-left-[29rem] xl:-left-[20rem]">
        <Wheel />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="lg:mr-0 lg:ml-auto lg:w-fit">
          {width >= 1024 && (
            <>
              <ConceptHeading className="max-w-xl text-5xl" />
              <div className="mt-16 grid max-w-xl grid-cols-2 gap-4 xl:max-w-2xl">
                {cards.map((card, i) => (
                  <ConceptCard key={i} {...card} />
                ))}
              </div>
            </>
          )}
          {width < 1024 && (
            <div>
              <Swiper
                spaceBetween={16}
                loop
                grabCursor
                className="!px-6 sm:!px-8 md:!px-20 lg:!p-0"
                breakpoints={{
                  0: {
                    slidesPerView: 1.15
                  },
                  768: {
                    slidesPerView: 1.25
                  }
                }}>
                {cards.map(({ title, description, icon, hideOnSmallScreens }, i) => (
                  <SwiperSlide
                    className={`${hideOnSmallScreens ? '!hidden lg:!block' : ''}`}
                    key={i}>
                    <ConceptCard title={title} description={description} icon={icon} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>

        <div className="mx-auto mt-40 hidden max-w-6xl justify-between space-x-8 lg:flex">
        </div>
      </div>
    </section>
  );
};

export default Concept;

const ConceptHeading = ({ className }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <h2 className={`font-Bank-Sans font-bold tracking-[-0.04em] uppercase ${className || ''} tracking-[-0.04em]`}>
      Our holistic
      <span className="text-blue-gradient"> Concept</span>
      { isClient ? <Lottie animationData={seperatorAnimation} loop={false} className="max-w-sm mt-2" /> : null}
    </h2>
  );
};
