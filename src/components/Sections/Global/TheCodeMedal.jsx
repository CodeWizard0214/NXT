import useWindowDimensions from '@/hooks/useWindowDimensions';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TheCodeMedal = () => {
  const [isHovered, setIsHovered] = useState();
  const { width } = useWindowDimensions();

  const [rateLeft, setRateLeft] = useState(1);
  const [rateRight, setRateRight] = useState(rateLeft ** 2.2);

  useEffect(() => {
    if (width < 640) {
      setRateLeft(0.7);
      setRateRight(0.45);
    } else if (width < 1500) {
      setRateLeft(0.86);
      setRateRight(0.75);
    } else {
      setRateLeft(1);
      setRateRight(1);
    }
  }, [width, rateLeft]);

  const commonStyle = {
    scale: isHovered ? 1 : 0
  };

  const secondaryItemStyle = {
    opacity: 0.35
  };

  const items = [
    {
      style: {
        x: isHovered ? `${rateLeft * -225}%` : `${-50}%`,
        y: '-50%'
      },
      title: 'LOYALITY'
    },
    {
      style: {
        x: isHovered ? `${rateLeft * -375}%` : `${-50}%`,
        y: '-50%',
        ...secondaryItemStyle
      },
      hideOnSmallScreens: true,
      title: 'Supportive'
    },
    {
      style: {
        x: isHovered ? `${rateRight * 125}%` : `${-50}%`,
        y: '-50%'
      },
      title: 'SELFLESS'
    },
    {
      style: {
        x: isHovered
          ? `${rateRight * (width < 1500 && width > 1280 ? 1.05 : 1) * 275}%`
          : `${-50}%`,
        y: '-50%',
        ...secondaryItemStyle
      },
      hideOnSmallScreens: true,
      title: 'Reliable'
    },
    {
      style: {
        x: isHovered ? `${rateLeft * -175}%` : `${-50}%`,
        y: isHovered ? `${rateLeft * -475}%` : `${-50}%`
      },
      title: 'INTELlIGENCE'
    },
    {
      style: {
        x: isHovered ? `${rateLeft * -300}%` : `${-50}%`,
        y: isHovered ? `${rateLeft * -775}%` : `${-50}%`,
        ...secondaryItemStyle
      },
      hideOnSmallScreens: true,
      title: 'INTELlIGENCE'
    },
    {
      style: {
        x: isHovered ? `${rateLeft * -175}%` : `${-50}%`,
        y: isHovered ? `${rateLeft * 425}%` : `${-50}%`
      },
      title: 'HUMBLENESS'
    },
    {
      style: {
        x: isHovered ? `${rateLeft * -300}%` : `${-50}%`,
        y: isHovered ? `${rateLeft * 725}%` : `${-50}%`,
        ...secondaryItemStyle
      },
      title: 'TEAMWORK',
      hideOnSmallScreens: true
    },
    {
      style: {
        x: isHovered ? `${rateRight * 100}%` : `${-50}%`,
        y: isHovered ? `${rateLeft * 425}%` : `${-50}%`
      },
      title: 'FRIENDSHIP'
    },
    {
      style: {
        x: isHovered ? `${rateRight * 240}%` : `${-50}%`,
        y: isHovered ? `${rateLeft * 725}%` : `${-50}%`,
        ...secondaryItemStyle
      },
      hideOnSmallScreens: true,
      title: 'Productive'
    },
    {
      style: {
        x: isHovered ? `${rateRight * 100}%` : `${-50}%`,
        y: isHovered ? `${rateLeft * -475}%` : `${-50}%`
      },
      title: 'TEAMWORK'
    },
    {
      style: {
        x: isHovered ? `${rateRight * 240}%` : `${-50}%`,
        y: isHovered ? `${rateLeft * -775}%` : `${-50}%`,
        ...secondaryItemStyle
      },
      title: 'Efficient',
      hideOnSmallScreens: true
    }
  ];
  return (
    <div className="relative mt-16 md:mt-32">
      <Image
        className="relative z-30 mx-auto max-w-xs md:w-full md:max-w-none"
        src="/images/mockups/nxtyou-beat.png"
        width="515"
        height="687"
        alt=""
      />
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 1 }}>
        <Image src="/images/mockups/nxtyou-medal-silver.png" width="343" height="302" alt="" />
      </motion.div>
      <div className="absolute top-1/2 left-1/2 z-10 flex w-full min-w-max -translate-x-1/2 -translate-y-1/2 justify-center">
        <div className="w-1/2">
          <div className="relative pb-[113.44%]">
            <div
              className="absolute top-0 left-0 h-full w-full rounded-[100%] bg-[#6782B4] blur-[71.4px] transition-all duration-[600ms]"
              style={
                width > 640
                  ? {
                      filter: isHovered ? 'blur(192.81px)' : 'blur(147.174px)',
                      scale: isHovered ? '1.31' : '1'
                    }
                  : {}
              }></div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="relative mt-3 pb-[113.44%]">
            <div
              className="absolute top-0 left-0 h-full w-full rounded-[100%] bg-[#9DAFCE] blur-[74.9px] transition-all duration-[600ms]"
              style={
                width > 640
                  ? {
                      filter: isHovered ? 'blur(201.884px)' : 'blur(154.1px)',
                      scale: isHovered ? '1.31' : '1'
                    }
                  : {}
              }></div>
          </div>
        </div>
      </div>
      <ul className="text-white">
        {items.map(({ title, style, hideOnSmallScreens }, i) => (
          <Item
            hideOnSmallScreens={hideOnSmallScreens}
            key={i}
            style={{ ...style, ...commonStyle }}>
            {title}
          </Item>
        ))}
      </ul>
    </div>
  );
};

export default TheCodeMedal;

const Item = ({ style, children, hideOnSmallScreens }) => {
  return (
    <motion.li
      className={`box-shadow-light absolute top-1/2 left-1/2 z-20 w-full max-w-[7rem] rounded-md py-2 font-eurostar-extended text-[0.5rem] uppercase backdrop-blur-sm md:max-w-[12rem] md:rounded-xl md:py-3 md:text-sm ${
        hideOnSmallScreens ? 'hidden xl:block' : ''
      }`}
      animate={style}
      transition={{ ease: 'easeInOut', ...(style.opacity ? { duration: 0.3 } : {}) }}>
      {children}
    </motion.li>
  );
};
