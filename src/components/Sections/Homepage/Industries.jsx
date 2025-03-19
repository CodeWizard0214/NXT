import ArrowLeftIcon from "@/components/Shared/Icons/ArrowLeft";
import ArrowRightIcon from "@/components/Shared/Icons/ArrowRight";
import SwipeButton from "@/components/Shared/SwipeButton";
import Image from "next/image";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { useRef } from "react";

const Industries = () => {

  const Container = ({ children, className }) => {
    return (
      <div className={`box-shadow-semi-light rounded-3xl px-6 py-8 md:p-10 ${className || ''}`}>
        {children}
      </div>
    );
  };

  const responsive = {
    xxl: {
      breakpoint: { max: 4500, min: 0 },
      items: 13,
      partialVisibilityGutter: 20,
    }
    // xl: {
    //   breakpoint: { max: 1399, min: 1200 },
    //   items: 4,
    //   partialVisibilityGutter: 110,
    // },
    // lg: {
    //   breakpoint: { max: 1199, min: 992 },
    //   items: 3,
    //   partialVisibilityGutter: 20,
    // },
    // md: {
    //   breakpoint: { max: 991, min: 768 },
    //   items: 3,
    //   partialVisibilityGutter: 130,
    // },
    // sm: {
    //   breakpoint: { max: 767, min: 0 },
    //   items: 2,
    //}
  };

  const INDUSTRY_LIST = [
    { name: 'Startups', description: 'Proof of Concept and MVP Development', icon: '/images/industries/startups.svg' },
    { name: 'Real Estate', description: 'Website Design and Development for Realtors & Estate Agents and Property Professionals', icon: '/images/industries/real_estate.svg' },
    { name: 'Insurance', description: 'Web Design Services for Insurance Agencies', icon: '/images/industries/insurance.svg' },
    { name: 'High Tech', description: 'Data Visualisation and Dashboards for High Tech Industry', icon: '/images/industries/high_tech.svg' },
    { name: 'B2B', description: 'B2B Website Services', icon: '/images/industries/b2b.svg' },
    { name: 'eCommerce', description: 'Web Design for eCommerce Websites', icon: '/images/industries/ecommerce.svg' },
    { name: 'Health & Fitness', description: 'Website Design & Development for Healthcare, Pharmacy and Wellness Companies', icon: '/images/industries/health_fitness.svg' },
    { name: 'Community', description: 'Web Design for eCommerce Websites', icon: '/images/industries/community.svg' },
    { name: 'Finance', description: 'Web Design for eCommerce Websites', icon: '/images/industries/finance.svg' },
    { name: 'Ed Tech', description: 'Custom EdTech and Learning Management Systems for Various Industries', icon: '/images/industries/ed_tech.svg' },
    { name: 'Tour Operations', description: 'Travel and Tourism Software Development, Web Design and Branding Services ', icon: '/images/industries/tour_operations.svg' },
    { name: 'Blockchain', description: 'Web Design for eCommerce Websites', icon: '/images/industries/blockchain.svg' },
    { name: 'Art', description: 'Web Design for eCommerce Websites', icon: '/images/industries/art.svg' }
  ]

  const carouselRef = useRef();

  const swipeLeftClickHandler = () => {
    carouselRef.current.previous();
  }

  const swipeRightClickHandler = () => {
    carouselRef.current.next();
  }

  return (
    <section className="pl-6 pt-24 pb-32 sm:pl-8 md:pt-52  xl:pl-24">
      <div className="flex flex-col items-center md:flex-row mb-6 md:mb-10">
        <h2
          className={`max-w-3xl font-Bank-Sans tracking-[-0.04em] text-4xl font-bold uppercase sm:text-5xl`}>
          We work in These <br /><span className="text-blue-gradient">Industries</span>
        </h2>
        <div className="invisible md:visible h-0 md:h-auto md: mt-12 mx-24 flex justify-center space-x-3">
          <SwipeButton onClick={swipeLeftClickHandler} icon={<ArrowLeftIcon />} />
          <SwipeButton onClick={swipeRightClickHandler} icon={<ArrowRightIcon />} />
        </div>
      </div>
      <div className="w-[3600px] h-[265px] md:w-[4100px] md:h-[295px]">
        <Carousel
          ref={carouselRef}
          infinite={true}
          responsive={responsive}
          itemClass={'w-auto'}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={2000}
        >
          {INDUSTRY_LIST.map((item, index) => (
            <Container key={'industries'+index} className="flex flex-col justify-between w-[265px] h-[265px] md:w-[295px] md:h-[295px]">
              <Image
                className=""
                src={item.icon}
                width="55"
                height="55"
                alt="Clemens Kauscke"
              />
              <div>
                <p className="font-inter text-[24px] text-white leading-[38px]">{item.name}</p>
                <p className="font-inter text-[14px] text-[#FFFFFF9A] leading-[20px] mt-2">{item.description}</p>
              </div>
            </Container>
          ))}
        </Carousel>
      </div>
      <div className="visible md:invisible h-auto md:h-0 md: mt-12 mx-24 flex justify-center space-x-3">
          <SwipeButton onClick={swipeLeftClickHandler} icon={<ArrowLeftIcon />} />
          <SwipeButton onClick={swipeRightClickHandler} icon={<ArrowRightIcon />} />
        </div>
      <h2
        className={`flex justify-center md:justify-start max-w-3xl font-Bank-Sans font-bold tracking-[-0.04em] text-5xl uppercase md:text-6xl mt-32 mb-20`}>
        Brains at work
      </h2>
      <div className="flex flex-col md:flex-row md: justify-between items-center pr-6 sm:pr-8 xl:pr-24">
        <Image
          src={'/images/brains/punk.png'}
          width='319'
          height='134'
          alt=""
        />
        <Image
          src={'/images/brains/award.png'}
          width='368'
          height='134'
          alt=""
        />
        <Image
          src={'/images/brains/laureus.png'}
          width='342'
          height='134'
          alt=""
        />
      </div>
    </section>
  );
};

export default Industries;
