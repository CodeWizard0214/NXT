import Link from 'next/link';

const MenuLink = ({ children, href, index }) => {
  return (
    <li
      className="menu__item relative translate-x-full text-xl leading-[0.86] opacity-0 transition-all duration-500 ease-out"
      style={{ transitionDelay: `${index * 75 + 425}ms` }}>
      <Link
        className='z-5 after:ease relative inline-flex items-center overflow-hidden pr-[2.1rem] text-[calc(15px_+_(90_-_30)_*_((100vw_-_320px)/_(2560_-_320)))] font-black tracking-[-.12em] text-black after:absolute after:left-0 after:bottom-0 after:-z-[1] after:w-full after:bg-white after:transition-all after:duration-300 after:content-[""] hover:after:h-full'
        href={`${href}`}>
        <div className="menu__item-text pointer-events-none pt-8 transition-all duration-[400ms] ease-in-out md:-ml-[2rem]">
          <span className="hidden pr-1 align-text-top text-xl leading-[0.86] md:inline">
            {index}
          </span>
          {children}
        </div>
        <div className="menu__item-highlight absolute mt-[calc(2px_+_(4_-_2)_*_((100vw_-_320px)/_(2560_-_320)))] h-full shrink-0 flex-grow bg-[rgba(255,255,255,.8)] transition-all duration-[800ms] ease-in-out"></div>
      </Link>
    </li>
  );
};

export default MenuLink;
