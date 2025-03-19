const Item = ({ title, children }) => {
  return (
    <div className="mt-16 flex flex-col sm:text-center lg:flex-row lg:space-x-8 lg:text-left">
      <div className="flex space-x-1.5 sm:justify-center lg:w-1/2 lg:justify-start">
        <span className="mt-1.5 text-2xs font-bold">10</span>
        <span className="font-eurostar-extended text-3xl uppercase md:text-5xl">{title}</span>
      </div>
      <div className="mt-4 text-sm font-medium text-silver-chalice md:text-xl lg:mt-0 lg:w-1/2">
        <div className="max-w-lg sm:mx-auto lg:mx-0">{children}</div>
      </div>
    </div>
  );
};

const Details = () => {
  return (
    <section
      className="pb-9 px-6 sm:px-8 md:py-36 md:px-20 xl:px-32"
      style={{
        background:
          'linear-gradient(166.75deg, #020203 9.53%, rgba(0, 0, 0, 0) 102.13%), radial-gradient(62.26% 124.55% at 80.59% 68.3%, rgba(3, 3, 4, 0) 0%, #879CC4 100%)'
      }}>
      <div className="mx-auto max-w-7xl">
        <Item title="web design">
          <span className="text-white">Creation of a highly tailored</span>, original ideas and
          approaches to each business. Trying to distinguish the client from competitors as much as
          possible, based on the key points of identification.
        </Item>
        <Item title="web design">
          <span className="text-white">Delivering a really awesome interface</span> for your landing
          page or corporate website. We use classic development tools, as well as advanced
          development tools like Webflow with advanced animation and multimedia.
        </Item>
        <Item title="branding">
          <span className="text-white">Adapting and personalizing advertising</span> offers to the
          interests of the target audience. Furthermore, we offer mutually beneficial cooperation to
          companies in search of new ideas, optimization of advertising budgets, solving complex
          issues.
        </Item>
      </div>
    </section>
  );
};

export default Details;
