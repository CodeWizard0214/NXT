import React from 'react';
import LogoStack from './LogoStack';

const Brand = () => {
  return (
    <section
      className="relative overflow-hidden pt-16 pb-32 text-center md:pt-40 bg-cover bg-center"
      style={{backgroundImage: 'url("images/photos/brand-background/background.png")'}}
    >
      <div className="px-6">
        <h2 className="font-Bank-Sans font-bold uppercase text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[-0.04em]">
          We&apos;ve worked with <br /> some
          <span className="text-blue-gradient"> COOL BRANDS.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm font-medium text-oslo-gray md:text-base">
          We make your vision come reality through helping new brands start up and old one start
          over.
        </p>
      </div>
      <div className="mt-16 hidden items-center justify-center space-x-1.5 lg:flex">
        <div className="space-y-1.5">
          <LogoStack url="/images/logos/brands/adidas.svg" />
          <LogoStack darker url="/images/logos/brands/sat1.svg" />
        </div>
        <div className="space-y-1.5">
          <LogoStack url="/images/logos/brands/bmw.svg" />
          <LogoStack darker url="/images/logos/brands/f1.svg" />
          <LogoStack url="/images/logos/brands/panerai.svg" />
        </div>
        <div className="space-y-1.5">
          <LogoStack url="/images/logos/brands/olympic.svg" />
          <LogoStack darker url="/images/logos/brands/nhl.svg" />
        </div>
        <div className="space-y-1.5">
          <LogoStack url="/images/logos/brands/bridgestone.svg" />
          <LogoStack darker url="/images/logos/brands/sixt.svg" />
          <LogoStack url="/images/logos/brands/christies.svg" />
        </div>

        <div className="space-y-1.5">
          <LogoStack url="/images/logos/brands/karl-lagerfeld.svg" />
          <LogoStack darker url="/images/logos/brands/sky.svg" />
        </div>
        <div className="space-y-1.5">
          <LogoStack url="/images/logos/brands/logoipsum.svg" />
          <LogoStack darker url="/images/logos/brands/logoipsum-2.svg" />
          <LogoStack url="/images/logos/brands/logoipsum-3.svg" />
        </div>
        <div className="space-y-1.5">
          <LogoStack url="/images/logos/brands/logoipsum-4.svg" />
          <LogoStack darker url="/images/logos/brands/logoipsum-5.svg" />
        </div>
      </div>
      <div className="mt-9 flex items-center justify-center space-x-1.5 md:mt-16 md:space-x-1.5 lg:hidden">
        <div className="flex flex-col space-y-1.5 md:space-y-1.5">
          <LogoStack url="/images/logos/brands/adidas.svg" />
          <LogoStack darker url="/images/logos/brands/sat1.svg" />
          <LogoStack url="/images/logos/brands/bmw.svg" />
          <LogoStack darker url="/images/logos/brands/f1.svg" />
          <LogoStack darker url="/images/logos/brands/panerai.svg" />
        </div>
        <div className="flex flex-col space-y-1.5 md:space-y-1.5">
          <LogoStack url="/images/logos/brands/olympic.svg" />
          <LogoStack darker url="/images/logos/brands/nhl.svg" />
          <LogoStack url="/images/logos/brands/nhl.svg" />
          <LogoStack darker url="/images/logos/brands/bridgestone.svg" />
          <LogoStack darker url="/images/logos/brands/sixt.svg" />
          <LogoStack darker url="/images/logos/brands/christies.svg" />
        </div>
        <div className="flex flex-col space-y-1.5 md:space-y-1.5">
          <LogoStack url="/images/logos/brands/karl-lagerfeld.svg" />
          <LogoStack darker url="/images/logos/brands/sky.svg" />
          <LogoStack url="/images/logos/brands/logoipsum.svg" />
          <LogoStack darker url="/images/logos/brands/logoipsum-2.svg" />
          <LogoStack darker url="/images/logos/brands/logoipsum-5.svg" />
        </div>
      </div>
    </section>
  );
};

export default Brand;
