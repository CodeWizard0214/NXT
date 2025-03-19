
import Lottie from "lottie-react";
import seperatorAnimation from "@/components/Shared/seperator.json";
import Button from "@/components/Shared/Button";
import ArrowRightUpIcon from "@/components/Shared/Icons/ArrowRightUp";

const Mockup = () => {
  return (
    <section
      className="px-6 pt-16 sm:px-8 md:px-20 md:pt-32 xl:px-24 pb-16 md:pb-32"
      style={{ backgroundImage: 'url("images/photos/brand-background/background.png")' }}
    >
      <div
        className="mx-auto max-w-7xl items-center justify-between md:flex md:space-x-8"
      >
        <div className="text-center md:text-left">
          <h2 className="mx-auto max-w-lg font-Bank-Sans font-bold tracking-[-0.04em] uppercase text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
            Solutions Tailored to
            <span className="text-blue-gradient"> Your Needs</span>
          </h2>
          <p className="mx-auto mt-4 max-w-sm font-inter text-sm text-[#D9D9D9] md:max-w-lg md:text-base">
            We are a full-service digital agency, offering holistic solutions to help our clients
            reach their goals. Our team of professionals has expertise in a variety of areas, from
            web design and development to online marketing and social media. We pride ourselves on
            our ability to create custom solutions that are tailored to each individual client,
            taking into account their unique needs and objectives.
          </p>
          <Button className="mt-8 mx-auto gap-2" aria-label="View all openings">
            <div className="flex items-center gap-2">
              <p className="font-Poppins font-medium text-[16px] text-[#040617]">More about Culture</p>
              <ArrowRightUpIcon />
            </div>
          </Button>
        </div>
        <div className="mx-auto mt-8 max-w-sm lg:mt-0 xl:max-w-none">
          <video muted loop autoPlay width="500" height="697">
            <source
              src="https://drive.google.com/uc?export=preview&id=1pHAM3RMu4SbHgIWnqVz01616dnpLeuzL&confirm=t"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Mockup;
