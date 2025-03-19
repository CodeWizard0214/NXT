import useWindowDimensions from '@/hooks/useWindowDimensions';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TheCodeMedal from '../../Global/TheCodeMedal';

const CultureCode = () => {
  return (
    <section className="px-6 pt-28">
      <div className="flex flex-col items-center text-center">
        <h2
          className={`max-w-3xl font-Bank-Sans font-bold tracking-[-0.04em] text-3xl uppercase md:text-5xl`}>
          The <span className="text-blue-gradient">Culture</span> Code
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm font-medium text-silver-chalice lg:text-lg">
          For us, our values are more than just words. These won’t be on any test, but they come
          from the heart and run deep through our culture.
        </p>
        <TheCodeMedal />
      </div>
    </section>
  );
};

export default CultureCode;
