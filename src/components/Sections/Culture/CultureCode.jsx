import TheCodeMedal from '../Global/TheCodeMedal';

const CultureCode = () => {
  return (
    <section className="px-6">
      <div className="flex flex-col items-center text-center">
        <h2 className={`max-w-3xl font-eurostar-extended text-4.5xl uppercase md:text-6xl`}>
          Culture <span className="text-blue-gradient">Code</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-silver-chalice md:text-xl lg:text-lg">
          For us, our values are more than just words. These won’t be on any test, but they come
          from the heart and run deep through our culture.
        </p>
        <TheCodeMedal />
      </div>
    </section>
  );
};

export default CultureCode;
