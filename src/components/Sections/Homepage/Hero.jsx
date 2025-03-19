'use client';

import KeyA from '@/components/Shared/Icons/KeyA';
import useScrollPosition from '@/hooks/useScrollPosition';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const rate = 8;

  const scrollYPosition = useScrollPosition();
  const { width, height } = useWindowDimensions();

  const videoTransformValues = {
    xs: {
      translate3d: {
        y: -29,
        z: 200
      },
      rotateX: -73.5,
      scale3d: {
        x: 0.82,
        z: 1
      }
    },
    sm: {
      translate3d: {
        y: -38,
        z: 290
      },
      rotateX: -67,
      scale3d: {
        x: 0.772,
        z: 1
      }
    },
    md: {
      translate3d: {
        y: -55,
        z: 198
      },
      rotateX: -61,
      scale3d: {
        x: 0.835,
        z: 0.88
      }
    },
    lg: {
      translate3d: {
        y: -62,
        z: 190
      },
      rotateX: -56.5,
      scale3d: {
        x: 0.825,
        z: 0.765
      }
    }
  };

  const setVideoTransformValues = () => {
    if (width < 640) {
      return videoTransformValues.xs;
    } else if (width < 768) {
      return videoTransformValues.sm;
    } else if (width < 1024) {
      return videoTransformValues.md;
    } else {
      return videoTransformValues.lg;
    }
  };

  const [videoTransform, setVideoTransform] = useState(setVideoTransformValues());

  useEffect(() => {
    setVideoTransform(setVideoTransformValues());
  }, [width]);

  const videoStyle = {
    transform: `translate3d(0px, ${videoTransform.translate3d.y * Math.max(1 - scrollYPosition * 1.75 * rate, 0)
      }px, ${videoTransform.translate3d.z * Math.max(1 - scrollYPosition * 1.75 * rate, 0)
      }px) rotateX(${videoTransform.rotateX * Math.max(1 - scrollYPosition * 6 * rate, 0)
      }deg) scale3d(${Math.min(
        Math.abs(videoTransform.scale3d.x / (1 - scrollYPosition * 1)),
        1
      )}, ${Math.min(Math.abs(videoTransform.scale3d.z / (1 - scrollYPosition * 1.3 * rate)), 1)}, 1)`
  };

  useEffect(() => {
    const heroText = document.getElementById('hero-text');
    function heroChange() {
      let nextSpan = document.querySelector('#hero-text .opacity-100');
      heroText.style.width = `${nextSpan.offsetWidth}px`;
      setTimeout(() => {
        nextSpan.classList.remove('opacity-100');
        if (nextSpan.nextElementSibling.innerText != '') {
          nextSpan.nextElementSibling.classList.add('opacity-100');
        } else {
          heroText.firstElementChild.classList.add('opacity-100');
        }
      }, 3250);
      setTimeout(() => {
        heroText.style.width = '0px';
      }, 2500);
    }
    heroChange();
    const interval = setInterval(heroChange, 3650);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center">
      <div
        className="absolute left-0 right-0 z-10 mx-auto max-w-xl px-6 md:max-w-2xl lg:max-w-5xl xl:max-w-6xl"
        style={{ top: '15vh' }}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1
          }}
          transition={{ duration: 3, delay: 5, ease: 'linear' }}
          className="mt-5 font-Bank-Sans font-bold lg:!leading-[3.3rem] text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[-0.03em]">
          WE CREATE HUMAN CONNECTION THROUGH
          <span className="text-blue-gradient"> DIGITAL EXPERIENCE.</span>
        </motion.h1>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1
          }}
          transition={{ duration: 3, delay: 8 }}
          aria-label="Submit request"
          className="mt-5 font-inter text-xs font-semibold text-oslo-gray">
          Press
          <span className="mx-1">
            <KeyA className="inline" />
          </span>
          anytime to request access
        </motion.button>
      </div>
      <div
        className="pb-20"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 7, ease: 'linear' }}
          className="relative mx-auto">
          <div
            style={{
              transform: `translateY(${height <= 833 && width >= 1024
                  ? 30 * Math.max(1 - scrollYPosition * 2.75 * rate, 0)
                  : 18 * Math.max(1 - scrollYPosition * 2.75 * rate, 0)
                }vh)`
            }}
            className="absolute left-0 right-0 mx-auto flex h-screen max-w-[335px] items-center justify-center sm:max-w-[487px] md:max-w-[660px] lg:max-w-[760px]">
            <div className="relative">
              <Image
                priority={true}
                src="/images/mockups/macbook.jpg"
                alt=""
                width={760}
                height={410}
                className="macbook-mask"
              />
              <div className="absolute top-0 left-[-3px] h-full w-full">
                <Image
                  src="/images/mockups/screen-3.jpg"
                  alt=""
                  priority={true}
                  width={760}
                  height={410}
                  className="screen-mask"
                />
              </div>
              <div className="absolute top-0 left-0 w-full">
                <Image
                  priority={true}
                  src="/images/mockups/key-lights.svg"
                  alt=""
                  width={760}
                  height={410}
                />
              </div>
            </div>
          </div>
          <div className="relative h-[1500px] md:h-[2000px] min-wide-screen:h-[1650px]">
            <div className="h-full">
              <div className="sticky top-0 z-10 flex h-screen w-full items-center justify-center overflow-hidden">
                <div
                  className="relative origin-center translate-y-[18vh] min-wide-screen:translate-y-[30vh]"
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '2000px',
                    transform: `translateY(${height <= 833 && width >= 1024
                        ? 30 * Math.max(1 - scrollYPosition * 2.75 * rate, 0)
                        : 18 * Math.max(1 - scrollYPosition * 2.75 * rate, 0)
                      }vh)`
                  }}>
                  <div
                    style={videoStyle}
                    className="relative z-10 mx-auto flex w-full max-w-[335px] items-center justify-center rounded-lg bg-black will-change-transform sm:max-w-[487px] md:h-[400px] md:max-w-[640px] md:rounded-2xl lg:h-auto lg:max-w-[760px]">
                    <div
                      className="relative h-full w-full shadow-[rgb(15,15,20)_0px_-30px_40px_0px]"
                      style={
                        width < 640
                          ? {
                            transform: `scaleY(${Math.max(
                              1.44 - scrollYPosition * rate * 10,
                              1
                            )})`
                          }
                          : {}
                      }>
                      <video
                        muted
                        loop
                        autoPlay
                        poster="/images/thumbnails/homepage_hero_video.png"
                        className="h-full w-full rounded-lg object-cover md:rounded-2xl"
                        style={{ aspectRatio: '3000/1876' }}
                        width={3000}
                        height={1876}>
                        <source
                          src="https://drive.google.com/uc?export=preview&id=1rlFhXm_MqAXAp0npk_wHDV_mOjMsy1CH&confirm=t"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="relative"
                style={{
                  opacity: width < 640 || scrollYPosition > 0.03086890243902439 ? 1 : 0
                }}>
                <h2 className="mx-auto max-w-xs font-eurostar-extended uppercase sm:max-w-md text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[-0.04em] md:max-w-2xl">
                  we make your vision become <span className="text-blue-gradient">reality.</span>
                </h2>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-[-20vh] flex flex-col items-center md:mt-[-12vh] lg:mt-[-10vh]">
          <h2 className="mx-auto max-w-sm font-Bank-Sans font-bold text-3xl md:max-w-none md:text-4xl lg:text-5xl xl:text-6xl tracking-[-0.04em]">
            WE ARE <br className="sm:hidden" />
            <span
              className="transition-width relative inline-block w-0 overflow-hidden text-left align-top uppercase duration-700 ease-in-out"
              id="hero-text"
              style={{ width: 0 }}>
              <span className="text-blue-gradient inline-block h-full pr-4 opacity-0 opacity-100">
                Designer.
              </span>
              <span className="text-blue-gradient absolute top-0 left-0 inline-block h-full pr-4 opacity-0">
                Developer.
              </span>
              <span className="text-blue-gradient absolute top-0 left-0 inline-block h-full pr-4 opacity-0">
                Videographers.
              </span>
              <span className="text-blue-gradient absolute top-0 left-0 inline-block h-full pr-4 opacity-0">
                Analysts.
              </span>
              <span className="text-blue-gradient absolute top-0 left-0 inline-block h-full pr-4 opacity-0">
                Managers.
              </span>
              <span className="text-blue-gradient absolute top-0 left-0 inline-block h-full pr-4 opacity-0">
                Doers.
              </span>
              <span className="text-blue-gradient absolute top-0 left-0 inline-block h-full pr-4 opacity-0">
                Creatives.
              </span>
              <span className="text-blue-gradient absolute top-0 left-0 inline-block h-full pr-4 opacity-0">
                Thinkers.
              </span>
              <div className="absolute right-0 top-0 h-full w-px bg-white"></div>
            </span>
          </h2>
          <p className="mt-[20px] text-[#D7D7D7] mx-auto max-w-[95%] md:max-w-[795px] font-inter">
            NXT YOU is an exclusive agency specializing in brand building, content creation, and digital marketing.
            We tailor our projects to the specific needs of our clients and have helped numerous companies establish their brand strategies, product development, and social media campaigns.
          </p>
          <ul className="mt-10 flex items-center">
            <li>
              <Image src="/images/icons/icon-td.svg" width="33" height="32" alt="" />
            </li>
            <li>
              <Image src="/images/icons/line-doted.svg" width="26" height="2" alt="" />
            </li>
            <li>
              <Image src="/images/icons/icon-rh.svg" width="33" height="32" alt="" />
            </li>
            <li>
              <Image src="/images/icons/line-doted.svg" width="26" height="2" alt="" />
            </li>
            <li>
              <Image src="/images/icons/icon-etrade.svg" width="33" height="32" alt="" />
            </li>
            <li>
              <Image src="/images/icons/line-doted.svg" width="26" height="2" alt="" />
            </li>
            <li>
              <Image src="/images/icons/icon-schwab.svg" width="33" height="32" alt="" />
            </li>
            <li>
              <Image src="/images/icons/line-doted.svg" width="26" height="2" alt="" />
            </li>
            <li>
              <Image src="/images/icons/icon-vanguard.svg" width="33" height="32" alt="" />
            </li>
          </ul>
          <div className="text-blue-gradient mt-8 text-sm">No more fragmentation.</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
