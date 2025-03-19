import Button from "@/components/Shared/Button";
import ArrowRightUpIcon from "@/components/Shared/Icons/ArrowRightUp";


const Measure = () => {
  return (
    <section
      className="px-6 pt-16 sm:px-8 md:px-20 md:pt-32 xl:px-24 pb-16 md:pb-32"
      style={{backgroundImage: 'url("images/photos/brand-background/background.png")'}}
    >
      <div
        className="md:grid md:grid-cols-2 mx-auto max-w-7xl"
      >
        <div className="md:text-left mb-9 md:mb-0">
          <div className="md:sticky md:top-28">
            <h2 className="mx-auto font-Bank-Sans font-bold text-3xl tracking-[-0.04em] uppercase md:text-4xl lg:mx-0 lg:text-6xl">
              We track us <br />and <span className="text-blue-gradient"> Measure.</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm text-silver-chalice md:max-w-lg md:text-base">
              We are a full-service digital agency, offering holistic solutions to help our clients reach their goals. Our team of professionals has expertise in a variety of areas, from web design and development to online marketing and social media. We pride ourselves on our ability to create custom solutions that are tailored to each individual client, taking into account their unique needs and objectives.
            </p>
            <Button className="mt-5 mx-auto gap-2" aria-label="View all openings">
              <div className="flex items-center gap-2">
                <div>To our Projects</div>
                <ArrowRightUpIcon />
              </div>
            </Button>
          </div>
        </div>
        <div className="mx-auto gap-2 flex flex-col sm:gap-4 lg:gap-10 xl:gap-12">
          <div>
            <h1 className="text-blue-gradient tracking-[-0.04em] font-inter font-bold text-7xl sm:text-8xl md:text-[100px], lg:text-[130px] xl:text-[160px]" >870%</h1>
            <p className="ml-3 font-inter max-w-sm text-sm text-[#D9D9D9] md:max-w-lg md:text-base">
              return on investment after <br />
              3 years
            </p>
          </div>
          <div>
            <h1 className="text-blue-gradient tracking-[-0.04em] font-bold font-inter text-7xl sm:text-8xl md:text-[100px], lg:text-[130px] xl:text-[160px]" >870%</h1>
            <p className="ml-3 font-inter max-w-sm text-sm text-[#D9D9D9] md:max-w-lg md:text-base">
              return on investment after <br />
              3 years
            </p>
          </div>
          <div>
            <h1 className="text-blue-gradient tracking-[-0.04em] font-bold font-inter text-7xl sm:text-8xl md:text-[100px], lg:text-[130px] xl:text-[160px]" >870%</h1>
            <p className="ml-3 font-inter max-w-sm text-sm text-[#D9D9D9] md:max-w-lg md:text-base">
              more productivity in post-production <br />
              3 years
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Measure;
