import PlayIcon from './Icons/Play';

const PlayButton = ({ large }) => {
  const boxShadow =
    'rgb(0 0 0 / 8%) 0px 2.00798px 3.61436px -0.25px, rgb(0 0 0 / 8%) 0px 4.78105px 8.60589px -0.5px, rgb(0 0 0 / 8%) 0px 8.71119px 15.6801px -0.75px, rgb(0 0 0 / 9%) 0px 14.4821px 26.0677px -1px, rgb(0 0 0 / 9%) 0px 23.4006px 42.1211px -1.25px, rgb(0 0 0 / 9%) 0px 38.2817px 68.9071px -1.5px, rgb(0 0 0 / 10%) 0px 65.9524px 118.714px -1.75px, rgb(0 0 0 / 12%) 0px 120px 216px -2px';
  return (
    <>
      <div
        style={{ boxShadow }}
        className={`absolute border border-white/5 top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 backdrop-blur-md transition-all duration-300 ease-linear group-hover:bg-black/80 ${
          large
            ? 'h-24 w-24 group-hover:h-28 group-hover:w-28'
            : 'h-20 w-20 group-hover:h-24 group-hover:w-24'
        }`}></div>
      <PlayIcon
        className={`absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 ${
          large ? ' h-8 w-8' : 'h-6 w-6'
        }`}
      />
    </>
  );
};

export default PlayButton;
