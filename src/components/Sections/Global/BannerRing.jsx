import { useRef, useState } from 'react';
import Button from '@/components/Shared/Button';
import useScrollPosition from '@/hooks/useScrollPosition';
import Image from 'next/image';
import ArrowRightUpIcon from '@/components/Shared/Icons/ArrowRightUp';

const BannerRing = () => {
  const bannerContainer = useRef(null);
  const [rotateValue, setRotateValue] = useState(0);

  useScrollPosition((scrollYProgress) => {
    const speed = 3;
    const degree = ((scrollYProgress * 100) / 100) * 360 * speed;
    setRotateValue(degree);
  });

  return (
    <section
      ref={bannerContainer}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      id="BannerRing">
      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-Bank-Sans tracking-[-0.04em] font-bold uppercase !leading-tight md:text-4xl">
          Feels like a<br />
          good fit?
        </h2>
        <p className="my-4 text-base font-medium opacity-60 md:text-lg">
          Let&apos;s kick some ass together
        </p>
        <Button className="mt-2 mx-auto flex items-center gap-2" aria-label="View all openings">
          <div>Career Page</div>
          <ArrowRightUpIcon />
        </Button>
      </div>

      <div className="hidden md:block">
        <Image
          style={{ transform: `scale(0.92) rotate(${rotateValue}deg)` }}
          className="absolute top-0 left-0 h-full w-full object-contain"
          src="/images/mockups/ring1.png"
          alt=""
          width="758"
          height="757"
        />
        <Image
          style={{ transform: `scale(1.37) rotate(-${rotateValue}deg)` }}
          src="/images/mockups/ring2.png"
          className="absolute top-0 left-0 h-full w-full object-contain"
          alt=""
          width="1114"
          height="1113"
        />
        <Image
          style={{ transform: `scale(2) rotate(${rotateValue}deg)` }}
          src="/images/mockups/ring3.png"
          className="absolute top-0 left-0 h-full w-full object-contain"
          alt=""
          width="1609"
          height="1608"
        />
      </div>

      <Image
        style={{ transform: 'scale(1.7)' }}
        src="/images/mockups/ring-group.svg"
        className="wheel-animation absolute top-0 left-0 h-full w-full object-contain md:hidden"
        alt=""
        width="1111"
        height="1110"
      />
    </section>
  );
};

export default BannerRing;
