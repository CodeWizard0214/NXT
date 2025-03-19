
import Button from "@/components/Shared/Button";
import seperatorAnimation from "@/components/Shared/seperator.json";
import Lottie from "lottie-react";
import Image from "next/image";

const WhoWeAreCard = ({ subtitle, background, location, index, style, title }) => {
  return (
    <div
      className={`sticky flex h-[60vh] flex-col justify-center rounded-2xl bg-black bg-cover bg-center bg-no-repeat px-6 md:h-[65vh] md:px-20 xl:px-28`}
      style={{
        ...style,
        zIndex: 6 - index
      }}>
      <picture>
        <source media="(max-width:768px)" srcSet={background.mobile} />
        <Image
          className="bg-gradient-black-white absolute top-0 left-0 z-[-1] h-full w-full rounded-2xl border border-[#242424] object-cover"
          src={background.desktop}
          alt=""
          width="1272"
          height="472"
        />
      </picture>

      <div className="max-w-[38rem]">
        <h2 className="font-Bank-Sans font-bold text-4xl tracking-[-0.04em] uppercase md:text-5xl xl:text-6xl mb-3">
          we are <span className="text-blue-gradient">{title}</span>
        </h2>
        {/* <Lottie animationData={seperatorAnimation} loop={false}/> */}
        <p className="mt-1 max-w-lg font-manrope text-[#D7D7D7]">{subtitle}</p>
        <Button className="mt-5 mx-auto gap-2" aria-label="View all openings">
          <div>To our Projects</div>
        </Button>
      </div>
      <p className="absolute bottom-4 left-4 flex space-x-2 font-manrope text-xs text-white">
        <span className="font-bold">0{index + 1}</span>
        <span>{location}</span>
      </p>
    </div>
  );
};

export default WhoWeAreCard;
