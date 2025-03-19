import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Item = ({ name }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative">
      <div className="cursor-pointer font-eurostar-extended text-6xl uppercase text-shark transition-colors hover:text-white xl:text-7xl">
        {name}
      </div>
      <motion.div
        initial={{ opacity: 0, scaleY: 0.5 }}
        animate={{ opacity: isHovered ? 1 : 0, scaleY: isHovered ? 1 : 0 }}
        style={{
          filter:
            'drop-shadow(-88px 101px 54px rgba(206, 195, 189, 0.02)) drop-shadow(-49px 57px 45px rgba(206, 195, 189, 0.07)) drop-shadow(-22px 25px 33px rgba(206, 195, 189, 0.12)) drop-shadow(-5px 6px 18px rgba(206, 195, 189, 0.14)) drop-shadow(0px 0px 0px rgba(206, 195, 189, 0.14))',
          x: Math.max(mousePosition.x, 0) + 50,
          y: Math.max(mousePosition.y, 0)
        }}
        className="pointer-events-none absolute -top-full left-0 z-10 overflow-hidden rounded-xl">
        <Image
          style={{ width: '444px' }}
          src="/images/photos/adaption/01.jpg"
          width="444"
          height="210"
          alt=""
        />
      </motion.div>
    </li>
  );
};

const Adaption = () => {
  return (
    <section className="relative">
      <div className="overflow-hidden py-28 md:px-20 lg:pt-32 lg:pb-40 xl:px-32 ">
        <div
          className="absolute top-0 -left-[60%] hidden w-full opacity-30 lg:block"
          style={{
            height: '54.375rem',
            background: 'radial-gradient(50% 50% at 50% 50%, #8CA1C6 0%, rgba(0, 0, 0, 0) 100%)'
          }}></div>
        <div className="mx-auto hidden max-w-7xl space-x-16 lg:flex">
          <div className="max-w-xs">
            <h2 className="text-blue-gradient text-2xl font-medium">Adaption</h2>
            <p className="mt-4 text-xl text-silver-chalice">
              <span className="text-white">It’s love at first shoot.</span>
              <br />
              Creators of every kind are discovering Camera to Cloud. And wondering how they ever
              shot without it.
            </p>
          </div>
          <ul className="space-y-8">
            <Item name="Influencers" />
            <Item name="Brands" />
            <Item name="Production" />
            <Item name="Agencies" />
            <Item name="Sport ind." />
          </ul>
        </div>
        <div className="lg:hidden">
          <h2 className="text-blue-gradient px-6 text-2xl font-medium sm:px-8">Adaption</h2>
          <Image
            className="mt-8 w-full"
            src="/images/photos/adaption/01.jpg"
            width="444"
            height="210"
            alt=""
          />
          <div className="px-6 sm:px-8">
            <p className="mt-10 text-xl font-medium text-silver-chalice">
              <span className="text-white">It’s love at first shoot.</span> Creators of every kind
              are discovering Camera to Cloud. And wondering how they ever shot without it.
            </p>
            <div className="mt-10 flex space-x-4 font-eurostar-extended text-xl uppercase">
              <div>Influencers</div>
              <div>Brands</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adaption;
