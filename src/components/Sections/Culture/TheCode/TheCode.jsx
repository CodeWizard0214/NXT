import BeCandidImage from './images/BeCandidImage';
import BeCuriousImage from './images/BeCuriousImage';
import BeHumblreImage from './images/BeHumbleImage';
import DontSettleImage from './images/DontSettleImage';
import StayCrazyImage from './images/StayCrazyImage';
import TeamUpImage from './images/TeamUpImage';
import styles from './style.module.css';

const TheCode = () => {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-32 font-manrope sm:px-8 md:px-20 xl:px-32">
      <div
        style={{
          width: '1594.89px',
          height: '870.28px',
          background: 'radial-gradient(50% 50% at 50% 50%, #8CA1C6 0%, rgba(0, 0, 0, 0) 100%)',
          transform: 'rotate(10deg) translate(-40%, -40%)'
        }}
        className="absolute top-1/2 left-1/2 opacity-20 blur-2xl"></div>

      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between lg:flex-row lg:space-x-8 xl:space-x-16">
        <div className="top-40 max-w-lg self-start md:mx-auto md:text-center lg:sticky lg:mx-0 lg:text-left">
          <h2 className="hidden font-eurostar-extended text-6xl leading-none md:block lg:max-w-sm">
            THE CULTURE <span className="text-blue-gradient">CODE</span>
          </h2>
          <h2 className="max-w-sm font-eurostar-extended text-4.5xl leading-none md:hidden">
            NXTYOU IS <span className="text-blue-gradient">CULTURE</span>
          </h2>
          <p className="mt-2 font-manrope text-sm font-medium text-dusty-gray md:text-xl md:font-normal">
            For us, our values are more than just words. These won’t be on any test, but they come
            from the heart and run deep through our culture.
          </p>
        </div>

        <div className="mx-auto mt-12 flex w-full max-w-xl lg:mt-0">
          <div className="flex w-1/2 flex-col">
            <div
              className={`relative m-1 flex h-60 flex-col overflow-hidden rounded-xl md:h-[17rem] md:rounded-3xl ${styles.boxShadow}`}
              style={{
                background: 'linear-gradient(0deg, #1A1A1A, #1A1A1A), #0F1012'
              }}>
              <div className="text-blue-gradient ml-6 mt-6 max-w-[9rem] text-2xl font-extrabold md:text-3xl">
                Be CURIOUS.
              </div>
              <div
                className="absolute left-1/2 w-max -translate-x-1/2"
                style={{ bottom: '-2.5rem' }}>
                <div className="h-full w-full overflow-hidden">
                  <BeCuriousImage />
                </div>
              </div>
            </div>
            <div
              className={`relative m-1 flex h-[19rem] flex-col overflow-hidden rounded-xl md:h-[21rem] md:rounded-3xl ${styles.boxShadow}`}
              style={{
                background: 'linear-gradient(0deg, #1A1A1A, #1A1A1A), #0F1012'
              }}>
              <div className="text-blue-gradient ml-6 mt-6 max-w-[8rem] md:max-w-[9rem] text-2xl font-extrabold md:text-3xl">
                BE CANDID.
              </div>
              <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: '1rem' }}>
                <div className="h-full w-full overflow-hidden">
                  <BeCandidImage />
                </div>
              </div>
            </div>
            <div
              className={`relative m-1 flex h-[17em] flex-col overflow-hidden rounded-xl md:h-[19rem] md:rounded-3xl ${styles.boxShadow}`}
              style={{
                background: 'linear-gradient(0deg, #1A1A1A, #1A1A1A), #0F1012'
              }}>
              <div className="text-blue-gradient ml-6 mt-6 max-w-[8rem] md:max-w-[9rem] text-2xl font-extrabold md:text-3xl">
                BE HUMBLE.
              </div>
              <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: '0rem' }}>
                <div className="h-full w-full overflow-hidden">
                  <BeHumblreImage />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 flex-col">
            <div
              className={`relative m-1 flex h-[17rem] flex-col overflow-hidden rounded-xl md:h-[19rem] md:rounded-3xl ${styles.boxShadow}`}
              style={{
                background: 'linear-gradient(0deg, #1A1A1A, #1A1A1A), #0F1012'
              }}>
              <div className="text-blue-gradient ml-6 mt-6 max-w-[9rem] text-2xl font-extrabold md:text-3xl">
                TEAM UP.
              </div>
              <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '9rem' }}>
                <div className="h-full w-full overflow-hidden">
                  <TeamUpImage />
                </div>
              </div>
            </div>
            <div
              className={`relative m-1 flex h-60 flex-col overflow-hidden rounded-xl md:h-[17rem] md:rounded-3xl ${styles.boxShadow}`}
              style={{
                background: 'linear-gradient(0deg, #1A1A1A, #1A1A1A), #0F1012'
              }}>
              <div className="text-blue-gradient ml-6 mt-6 max-w-[9rem] text-2xl font-extrabold md:text-3xl">
                DONT SETTLE.
              </div>
              <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: '0rem' }}>
                <div className="h-full w-full overflow-hidden">
                  <DontSettleImage />
                </div>
              </div>
            </div>
            <div
              className={`relative m-1 flex h-[17rem] flex-col overflow-hidden rounded-xl md:h-[19rem] md:rounded-3xl ${styles.boxShadow}`}
              style={{
                background: 'linear-gradient(0deg, #1A1A1A, #1A1A1A), #0F1012'
              }}>
              <div className="text-blue-gradient ml-6 mt-6 max-w-[9rem] text-2xl font-extrabold md:text-3xl">
                STAY CRAZY.
              </div>
              <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: '-1rem' }}>
                <div className="h-full w-full overflow-hidden">
                  <StayCrazyImage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheCode;
