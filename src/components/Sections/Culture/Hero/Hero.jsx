import Image from 'next/image';
import styles from './style.module.css';
import { motion } from 'framer-motion';
import { Context } from '@/components/Shared/Layout';
import { useContext, useState } from 'react';
import { cubicInOut } from '@/utils/animation';

const BackgroundImageCard = ({ style, src, className, level }) => {
  const [{ loadingAnimationFinished }] = useContext(Context);
  const [isAnimated, setIsAnimated] = useState(false);
  return (
    <motion.div
      initial={{ paddingTop: `${50 * level}rem`, opacity: 0 }}
      animate={loadingAnimationFinished ? { paddingTop: '0rem', opacity: [0, 1, 1, 1] } : {}}
      transition={{ duration: 1.75, ease: cubicInOut }}
      className={`absolute w-80 transition-[filter] duration-700 will-change-[padding] ${
        className || ''
      }`}
      style={{
        ...style,
        filter: isAnimated
          ? 'drop-shadow(35px 73px 32px rgba(204, 193, 186, 0.01)) drop-shadow(20px 41px 27px rgba(204, 193, 186, 0.05)) drop-shadow(9px 18px 20px rgba(204, 193, 186, 0.09)) drop-shadow(2px 5px 11px rgba(204, 193, 186, 0.1)) drop-shadow(0px 0px 0px rgba(204, 193, 186, 0.1))'
          : 'none'
      }}
      onAnimationComplete={() => {
        setIsAnimated(true);
      }}>
      <Image
        className="aspect-[4/3] w-full rounded-3xl"
        src={src}
        width={480}
        height={360}
        alt=""
        priority={true}
      />
    </motion.div>
  );
};

const Hero = () => {
  const [{ loadingAnimationFinished }] = useContext(Context);
  return (
    <section
      style={{
        height: 'calc(var(--height-extra) + (min(100vh, 60rem))/2)'
      }}
      className={`overflow-hidden ${styles.HeroSection}`}>
      <div
        className="relative flex items-center justify-center"
        style={{ minHeight: 'min(100vh, 60rem)' }}>
        <div
          style={{
            background: 'radial-gradient(50% 50% at 50% 50%, #879CC4 0%, rgba(0, 0, 0, 0) 100%)'
          }}
          className="absolute top-1/2 left-1/2 h-[810px] w-[1440px] -translate-x-1/2 -translate-y-1/2 opacity-20 md:h-screen md:w-full md:-rotate-[160deg]"></div>
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={loadingAnimationFinished ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, ease: cubicInOut, duration: 0.75 }}
          className="relative z-10 mt-32 px-6  text-center sm:px-8 lg:mt-0 xl:mt-40">
          <div className="text-blue-gradient text-lg font-medium md:text-xl">THE TEAM</div>
          <h1 className="mt-2 font-eurostar-extended text-4.5xl md:text-6xl">
            OUR <span className="text-blue-gradient">CULTURE</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm font-medium text-silver-chalice md:text-base">
            Hinter cap-on steht ein dynamisches und hochmotiviertes Team, welches Köpfe aus
            verschiedenen professionellen Backgrounds, wie Financial Services, Legal und Tech,
            zusammenbringt. Was uns vereint, ist ein sportlicher Teamgeist und die Ambition, ein
            herausragendes Produkt anzubieten. Gemeinsam entwickeln wir mit cap-on kreativ und
            kundenorientiert die Finanzierungslösung der Zukunft.
          </p>
        </motion.div>
        <div className="absolute top-0 left-0 h-full w-full scale-75 space-y-6 lg:origin-top lg:scale-[0.8] xl:scale-100">
          <BackgroundImageCard
            src="/images/photos/culture/01.webp"
            className="hidden lg:block"
            style={{
              top: 'calc(50% - 21rem)',
              left: 'calc(50% - 74.5rem)'
            }}
            level={2.5}
          />
          <BackgroundImageCard
            src="/images/photos/culture/02.webp"
            className="hidden lg:block"
            style={{
              top: 'calc(50% - 6rem)',
              left: 'calc(50% - 74.5rem)'
            }}
            level={3.5}
          />
          <BackgroundImageCard
            src="/images/photos/culture/03.jpg"
            className="hidden lg:block"
            style={{
              top: 'calc(50% - 26rem)',
              left: 'calc(50% - 53rem)'
            }}
            level={2.2}
          />
          <BackgroundImageCard
            src="/images/photos/culture/04.jpg"
            className="hidden lg:block"
            style={{
              top: 'calc(50% - 9.5rem)',
              left: 'calc(50% - 53rem)'
            }}
            level={3.2}
          />
          <BackgroundImageCard
            src="/images/photos/culture/05.jpg"
            className="hidden lg:block"
            style={{
              top: 'calc(50% + 7rem)',
              left: 'calc(50% - 53rem)'
            }}
            level={4.2}
          />
          <BackgroundImageCard
            src="/images/photos/culture/06.jpg"
            style={{
              top: 'calc(50% - 44rem)',
              left: 'calc(50% - 31.5rem)'
            }}
            level={1.1}
          />
          <BackgroundImageCard
            src="/images/photos/culture/07.jpg"
            style={{
              top: 'calc(50% - 27.5rem)',
              left: 'calc(50% - 31.5rem)'
            }}
            level={2.1}
          />
          <BackgroundImageCard
            src="/images/photos/culture/08.jpg"
            style={{
              top: 'calc(50% + 19.5rem)',
              left: 'calc(50% - 31.5rem)'
            }}
            level={5.1}
          />
          <BackgroundImageCard
            src="/images/photos/culture/09.jpg"
            style={{
              top: 'calc(50% + 36rem)',
              left: 'calc(50% - 31.5rem)'
            }}
            level={6.1}
          />
          <BackgroundImageCard
            src="/images/photos/culture/24.jpg"
            style={{
              top: 'calc(50% - 51rem)',
              left: 'calc(50% - 10rem)'
            }}
            level={1}
          />
          <BackgroundImageCard
            src="/images/photos/culture/10.jpg"
            style={{
              top: 'calc(50% - 34.5rem)',
              left: 'calc(50% - 10rem)'
            }}
            level={1.9}
          />

          <BackgroundImageCard
            src="/images/photos/culture/11.jpg"
            style={{
              top: 'calc(50% + 29.5rem)',
              left: 'calc(50% - 10rem)'
            }}
            level={5.6}
          />
          <BackgroundImageCard
            src="/images/photos/culture/12.jpg"
            style={{
              top: 'calc(50% + 46rem)',
              left: 'calc(50% - 10rem)'
            }}
            level={6.6}
          />
          <BackgroundImageCard
            src="/images/photos/culture/13.jpg"
            style={{
              top: 'calc(50% - 40rem)',
              left: 'calc(50% + 11.5rem)'
            }}
            level={1.5}
          />
          <BackgroundImageCard
            src="/images/photos/culture/14.jpg"
            style={{
              top: 'calc(50% - 23.5rem)',
              left: 'calc(50% + 11.5rem)'
            }}
            level={2.5}
          />
          <BackgroundImageCard
            src="/images/photos/culture/15.jpg"
            style={{
              top: 'calc(50% + 24rem)',
              left: 'calc(50% + 11.5rem)'
            }}
            level={5.5}
          />
          <BackgroundImageCard
            src="/images/photos/culture/16.jpg"
            style={{
              top: 'calc(50% + 40.5rem)',
              left: 'calc(50% + 11.5rem)'
            }}
            level={6.5}
          />
          <BackgroundImageCard
            src="/images/photos/culture/18.jpg"
            style={{
              top: 'calc(50% - 35rem)',
              left: 'calc(50% + 33rem)'
            }}
            className="hidden lg:block"
            level={1.9}
          />
          <BackgroundImageCard
            src="/images/photos/culture/17.jpg"
            style={{
              top: 'calc(50% - 18.5rem)',
              left: 'calc(50% + 33rem)'
            }}
            className="hidden lg:block"
            level={2.9}
          />
          <BackgroundImageCard
            src="/images/photos/culture/19.jpg"
            style={{
              top: 'calc(50% - 2rem)',
              left: 'calc(50% + 33rem)'
            }}
            className="hidden lg:block"
            level={3.9}
          />
          <BackgroundImageCard
            src="/images/photos/culture/20.jpg"
            style={{
              top: 'calc(50% + 14.5rem)',
              left: 'calc(50% + 33rem)'
            }}
            className="hidden lg:block"
            level={4.9}
          />
          <BackgroundImageCard
            src="/images/photos/culture/21.jpg"
            style={{
              top: 'calc(50% - 29rem)',
              left: 'calc(50% + 54.5rem)'
            }}
            className="hidden lg:block"
            level={2}
          />
          <BackgroundImageCard
            src="/images/photos/culture/22.jpg"
            style={{
              top: 'calc(50% - 12.5rem)',
              left: 'calc(50% + 54.5rem)'
            }}
            className="hidden lg:block"
            level={3}
          />
          <BackgroundImageCard
            src="/images/photos/culture/23.jpg"
            style={{
              top: 'calc(50% + 4rem)',
              left: 'calc(50% + 54.5rem)'
            }}
            className="hidden lg:block"
            level={4}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
