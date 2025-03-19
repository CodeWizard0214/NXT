const Post = ({ title, subTitle, type, location }) => {
  return (
    <div className="grid grid-cols-2 items-center gap-5 rounded-[0.875rem] bg-cod-gray px-5 py-3 text-sm md:grid-cols-5 md:rounded-full md:p-[0.34375rem]">
      <div className="flex whitespace-nowrap md:col-span-2 md:whitespace-normal md:pl-5">
        <div className="text-base font-bold md:text-sm md:font-normal">
          {title}
        </div>
        <div className="invisible md:visible text-base font-bold md:text-sm md:font-normal">
          &nbsp;&nbsp;{subTitle}
        </div>
      </div>
      <div className="ml-auto md:ml-0 !text-gallery">{type}</div>
      <div className="!text-gallery">{location}</div>
      <button className="ml-auto flex w-fit items-center space-x-2 rounded-full bg-mercury px-5 py-2 text-mine-shaft transition-colors hover:bg-white md:px-7">
        <span>Apply</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={11}
          height={11}
          fill="none"
          viewBox="0 0 11 11">
          <path
            fill="#222"
            fillRule="evenodd"
            d="m9.243 4.19.847-.846a1.768 1.768 0 0 0-2.5-2.5l-.862.862A6.437 6.437 0 0 0 9.243 4.19Zm-3.97-1.03L1.571 6.863c-.425.425-.637.638-.777.899s-.199.556-.317 1.145l-.24 1.202c-.067.333-.1.5-.005.594.094.094.26.061.593-.005l1.202-.24c.59-.119.884-.178 1.146-.317.26-.14.473-.353.898-.778L7.784 5.65a8.44 8.44 0 0 1-2.511-2.488Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

const JobPosts = () => {
  return (
    <section className="px-6 pt-16 pb-8 md:pb-28 font-inter sm:px-8 md:px-20 xl:px-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold uppercase font-Bank-Sans">We have 4 <span className=" text-blue-gradient">current openings.</span></h2>
        <div className="mt-8">
          <h3 className="md:pl-8 !text-gallery">Marketing</h3>
          <div className="mt-7 space-y-4">
            <Post title="Junior Account Manager" subTitle="" type="Full Time" location="Berlin, Germany" />
            <Post title="Junior Digital Designer" subTitle="(UX/UI)" type="Full Time" location="Berlin, Germany" />
          </div>
        </div>
        <div className="mt-8">
          <h3 className="md:pl-8 !text-gallery">Information Technology</h3>
          <div className="mt-7 space-y-4">
            <Post title="Webflow Developer" subTitle="( Remote possible)" type="Full Time" location="Berlin, Germany" />
            <Post title="Web GL Developer" subTitle="- Freelance" type="Contract" location="Berlin, Germany" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPosts;
