import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const FooterTop = ({ background }) => {
  const [isHovered, setIsHovered] = useState();

  return (
    <div
      style={background}
      className="flex flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-32 text-center sm:pb-52 md:pt-40 md:pb-72">
      <div className="text-blue-gradient text-xs font-medium opacity-50 md:text-xl">
        Sharing made simple
      </div>
      {/* <h2 className="mt-4 max-w-xl font-eurostar-extended  text-2xl uppercase md:mt-8 md:text-4.5xl">
        Share here, there, <span className="md:text-blue-gradient">and everywhere.</span>
      </h2> */}
      <h2 className="mt-4 font-Bank-Sans font-bold tracking-[-0.04em] text-5xl uppercase md:mt-8 lg:text-6xl">
        Share here, there, <br />
        <span className="text-blue-gradient">and everywhere.</span>
      </h2>
      <p className="mt-4 max-w-lg text-sm font-medium text-silver-chalice md:mt-12 md:max-w-2xl md:text-base lg:max-w-3xl lg:text-xl">
        Shareable links make it easy to send versions for review or present a finished video to
        stakeholders anywhere.
      </p>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ boxShadow: '0px 5px 25px rgba(255, 255, 255, 0.15)' }}
        className="mt-4 rounded-full border border-white py-2 px-12 text-sm font-semibold transition-all duration-500 hover:bg-white hover:text-black md:mt-12">
        Request access
      </button>
      <div className="relative mt-20 w-[71.25rem] scale-[0.327193] sm:scale-[0.642982] lg:scale-[.885] xl:scale-100">
        <Image
          className="absolute top-0 left-0 w-full"
          src="/images/mockups/shadow.svg"
          alt=""
          width="1140"
          height="297"
          sizes="1140px"
        />
        <Image
          className="laptop-mask absolute top-0 left-0 w-full"
          src="/images/mockups/laptop-closed-off.jpg"
          alt=""
          width="1140"
          height="297"
          sizes="1140px"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}>
          <Image
            className="laptop-mask absolute top-0 left-0 w-full"
            src="/images/mockups/laptop-closed-on.jpg"
            alt=""
            width="1140"
            height="297"
            sizes="1140px"
            unoptimized
          />
        </motion.div>
        <Image
          className="ease absolute top-0 left-0 w-full transition-opacity duration-200"
          src="/images/mockups/apple-unhovered.png"
          alt=""
          width="1140"
          height="297"
          sizes="1140px"
          style={{ opacity: isHovered ? 0 : 1 }}
        />
        <Image
          className="ease absolute top-0 left-0 w-full transition-opacity duration-200"
          src="/images/mockups/apple-hovered.png"
          alt=""
          width="1140"
          height="297"
          sizes="1140px"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>
    </div>
  );
};

export default FooterTop;
