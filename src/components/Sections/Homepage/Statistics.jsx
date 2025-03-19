import Image from "next/image";

const Container = ({ children, className }) => {
  return (
    <div className={`box-shadow-semi-light rounded-3xl px-6 py-8 md:p-10 ${className || ''}`}>
      {children}
    </div>
  );
};

const GradientText = ({ className, children, small }) => {
  return (
    <div
      className={`text-blue-gradient text-blue-gradient w-fit font-eurostar-extended ${
        small ? 'text-3xl md:text-6xl' : 'text-6xl md:text-7xl'
      } leading-none tracking-tighter  ${className || ''}`}>
      {children}
    </div>
  );
};

const Statistics = () => {
  return (
    <section className="px-6 pt-24 pb-32 sm:px-8 md:pt-52  xl:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-in grid gap-3 text-xl text-shuttle-gray md:grid-cols-2 md:text-3xl lg:grid-cols-3">
          <Container className="flex flex-col justify-center">
            <GradientText>156+</GradientText>
            <div className="mt-4">Successful projects every year</div>
          </Container>
          <Container className="flex flex-col justify-center">
            <div>Years of experience in business</div>
            <div className="mt-3 flex items-end justify-between">
              <div
                className="rounded-full bg-white opacity-10"
                style={{ width: '0.3125rem', height: '1.03125rem' }}></div>
              <div
                className="bg-white opacity-10"
                style={{ width: '0.3125rem', height: '1.63812rem' }}></div>
              <div
                className="rounded-full bg-white opacity-10"
                style={{ width: '0.3125rem', height: '2.53062rem' }}></div>
              <div
                className="rounded-full bg-white opacity-10"
                style={{ width: '0.3125rem', height: '3.97812rem' }}></div>
              <div
                className="bg-blue-gradient rounded-full"
                style={{ width: '0.3125rem', height: '5.296875rem' }}></div>
              <GradientText className="-mb-2">5</GradientText>
            </div>
          </Container>
          <Container className="row-span-2 flex flex-col items-center overflow-hidden py-16 text-center md:col-span-2 lg:col-start-3 xl:px-16">
            <GradientText className="-mb-2">15k+</GradientText>
            <div className="mt-2">downloads</div>
            <div className="relative mt-16 h-64 w-full sm:w-3/5 lg:w-full">
              <Image
                className="absolute top-0 w-full"
                src="/images/mockups/phone.png"
                width="1123"
                height="2048"
                alt=""
              />
            </div>
          </Container>
          <Container className="relative flex items-center justify-center !py-16 md:col-span-2">
            <Image
              className="absolute top-0 left-0 h-full w-full object-contain "
              src="/images/mockups/map.png"
              width="687"
              height="515"
              alt=""
            />
            <div>
              <GradientText small>THE WORLD</GradientText>
              <div className="mt-2 text-center">The world is our office</div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
