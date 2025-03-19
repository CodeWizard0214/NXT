import Button from '@/components/Shared/Button';
import ArrowLeftIcon from '@/components/Shared/Icons/ArrowLeft';
import ArrowRightIcon from '@/components/Shared/Icons/ArrowRight';
import ArrowRightUpIcon from '@/components/Shared/Icons/ArrowRightUp';
import SwipeButton from '@/components/Shared/SwipeButton';
import seperatorAnimation from '@/components/Shared/seperator.json';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import Lottie from 'lottie-react';
import Image from 'next/image';
import { useState } from 'react';

const Office = () => {
  const cities = [
    {
      name: 'LOS ANGELES',
      bgLocation: '/images/photos/cities/los_angeles.jpg'
    },
    {
      name: 'NEW YORK',
      bgLocation: '/images/photos/cities/new_york.jpg'
    },
    {
      name: 'DUBAI',
      bgLocation: '/images/photos/cities/dubai.jpg'
    },
    {
      name: 'CAPETOWN',
      bgLocation: '/images/photos/cities/capetown.jpg'
    },
    {
      name: 'RHODOS',
      bgLocation: '/images/photos/cities/rhodos.jpg'
    },
    {
      name: 'VENEDIG',
      bgLocation: '/images/photos/cities/venedig.jpg'
    }
  ];

  const { width } = useWindowDimensions();

  const linePositionsDesktop = ['3.5', '19.5', '36.25', '53', '70', '86.5'];

  const [currentCity, setCurrentCity] = useState(0);
  const [previousCity, setPreviousCity] = useState(0);

  const changeCity = (i) => {
    setPreviousCity(currentCity);
    setCurrentCity(i);
  };

  const slideCity = (i) => {
    if (i === 0 || width >= 640) {
      return 0;
    } else if (i === 1 || i === 2 || i === 3 || i === 4) {
      if (i <= previousCity) {
        return -(i - 1) * (100 / 6);
      } else {
        return -i * (100 / 6);
      }
    } else if (i === 5) {
      return -(currentCity - 1) * (100 / 6);
    } else {
      return 0;
    }
  };

  const swipeLeftClickHandler = () => {
    if (currentCity > 0) {
      changeCity(currentCity - 1);
    }
  };

  const swipeRightClickHandler = () => {
    if (currentCity < 5) {
      changeCity(currentCity + 1);
    }
  };

  const changeCityLine = () => {
    if (currentCity <= previousCity) {
      if (currentCity === 0) {
        return 17.5;
      } else {
        return 62.5;
      }
    } else {
      if (currentCity === 5) {
        return 62.5;
      } else {
        return 17.5;
      }
    }
  };

  return (
    <section className="relative mb-16 h-[45rem] overflow-hidden rounded-2xl md:rounded-3xl lg:h-[50rem]">
      <div className="absolute top-0 left-0 z-20 h-full w-full px-8 pt-16 sm:px-12 sm:pt-16 md:px-32 lg:pt-40 xl:px-60">
        <div className="">
          <div className="max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-2xl">
            <h2 className="font-Bank-Sans font-bold tracking-[-0.02em] uppercase text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
              The world IS our office
            </h2>
            {/* <Lottie animationData={seperatorAnimation} loop={false} className="my-1 pr-[10%]" /> */}
          </div>
          <p className="my-6 font-inter text-[16px] font-medium text-[#DCDCDC] sm:max-w-xl sm:text-sm lg:max-w-3xl lg:text-base">
            Our approach is focused on the idea that gaining knowledge about different cultures and
            pooling the best ideas from all around the world can be achieved from any location. We
            strongly believe that creative thinking can come from any part of the globe. Our
            dedication to flexible working arrangements enables us to stay connected to the global
            community and recognize and take advantage of the best ideas and solutions, regardless
            of their origin. By using technology, we can work with the best minds from all over the
            world while keeping a close-knit, collaborative team.
          </p>
          <div className="absolute px-8 left-0 top-[45%] w-[100%] flex justify-between invisible md:visible">
            <SwipeButton onClick={swipeLeftClickHandler} icon={<ArrowLeftIcon />} />
            <SwipeButton onClick={swipeRightClickHandler} icon={<ArrowRightIcon />} />
          </div>
          <div className="visible md:invisible h-auto md:h-0 mt-8 md:mt-0 flex items-center space-x-3">
            <SwipeButton onClick={swipeLeftClickHandler} icon={<ArrowLeftIcon />} />
            <SwipeButton onClick={swipeRightClickHandler} icon={<ArrowRightIcon />} />
          </div>
          <Button className="invisible md:visible mt-0 md:mt-5 mx-auto gap-2" aria-label="View all openings">
            <div className="flex items-center gap-2">
              <div>More about Culture</div>
              <ArrowRightUpIcon />
            </div>
          </Button>
        </div>
      </div>
      <div className='absolute h-[60%] bottom-0 w-full z-10' style={{ background: `linear-gradient(4.16deg, #030404 5.49%, rgba(3, 4, 4, 0.8) 25.31%, rgba(0, 0, 0, 0) 72.31%)` }}></div>
      <ul
        className="flex h-full transition-transform duration-1000"
        style={{ transform: `translateX(-${currentCity * 100}%)` }}>
        {cities.map((city, i) => (
          <li key={i} className="h-full w-full shrink-0">
            <Image
              width="1440"
              height="838"
              className="h-full w-full object-cover"
              src={city.bgLocation}
              alt=""
              sizes="100vw"
            />
          </li>
        ))}
      </ul>
      <div className="absolute bottom-[109px] w-full">
        <div className="relative h-0.5 w-full bg-[#DCDCDC]/30">
          <span
            style={{
              left: `${width < 640 ? changeCityLine() : linePositionsDesktop[currentCity]}%`
            }}
            className={`absolute top-0 h-full w-[10%] bg-white transition-[left] duration-1000`}></span>
        </div>
      </div>
      <div
        style={{ transform: `translateX(${slideCity(currentCity)}%)` }}
        className="absolute bottom-8 z-20 flex w-full min-w-[270vw] justify-between whitespace-nowrap font-manrope text-xs transition-all duration-1000 sm:min-w-0 sm:text-sm">
        {cities.map((city, i) => (
          <div key={i} style={{ width: '16.66%' }}>
            <div className="mx-auto w-fit cursor-pointer" onClick={() => changeCity(i)}>
              <div
                className="mx-auto mb-[2.88rem] h-[26px] w-[26px] rounded-full border-[2px] border-[#FFFFFF0A] flex justify-center items-center"
              >
                <div
                  className="h-[13px] w-[13px] rounded-full bg-white"
                  style={{
                    boxShadow: '0px 0px 13px #2D394B, 0px 0px 13px #8497CC, 0px 0px 13px rgba(111, 76, 255, 0.32), 0px 0px 13px rgba(111, 76, 255, 0.32)'
                  }}
                ></div>
              </div>
              <span
                className="font-inter font-bold text-sm leading-[17px] tracking-[0.19em]"
                style={{
                  color: currentCity === i ? '#FFF' : 'rgba(255, 255, 255, 0.5)'
                }}
              >{city.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Office;
