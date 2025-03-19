import WhoWeAreCard from './WhoWeAreCard';
import LogoStack from '../Brand/LogoStack';
import React from 'react';

const WhoWeAre = () => {
  const cards = [
    {
      title: 'apps.',
      subtitle:
        'or just the architects of our own destiny, empowered to shape our lives with the potential of our creative spark. We are creators of our own world, carving out our unique place in the universe with the power of our imagination.',
      background: {
        desktop: '/images/photos/who-we-are/01.png',
        mobile: '/images/photos/who-we-are/01-mobile.png'
      },
      location: (
        <>
          We build <b>MOBILE APPS</b>
        </>
      ),
      style: {
        bottom: `29vh`,
        marginTop: '-33.5vh',
        marginBottom: '30vh'
      }
    },
    {
      title: 'consulting.',
      subtitle:
        'or just passionate about creating something new and exciting. We take pride in developing innovative solutions to challenging problems.',
      background: {
        desktop: '/images/photos/who-we-are/02.png',
        mobile: '/images/photos/who-we-are/02-mobile.png'
      },
      location: (
        <>
          <b>Software</b> as a service
        </>
      ),
      style: {
        bottom: `24vh`,
        marginTop: '-28.5vh',
        marginBottom: '25vh'
      }
    },
    {
      title: 'saas.',
      subtitle:
        'or just the architects of our own destiny, empowered to shape our lives with the potential of our creative spark. We are creators of our own world, carving out our unique place in the universe with the power of our imagination.',
      background: {
        desktop: '/images/photos/who-we-are/03.png',
        mobile: '/images/photos/who-we-are/03.png'
      },
      location: (
        <>
          <b>Software</b> as a service
        </>
      ),
      style: { bottom: '19vh', marginTop: '-23.5vh', marginBottom: '20vh' }
    },
    {
      title: 'blockchain.',
      subtitle:
        'or just passionate about creating something new and exciting. We take pride in developing innovative solutions to challenging problems.',
      background: {
        desktop: '/images/photos/who-we-are/04.png',
        mobile: '/images/photos/who-we-are/04-mobile.png'
      },
      location: (
        <>
          <b>Software</b> as a service
        </>
      ),
      style: { bottom: '14vh', marginTop: '-18.5vh', marginBottom: '15vh' }
    },
    {
      title: 'design.',
      subtitle:
        'or just passionate about creating something new and exciting. We take pride in developing innovative solutions to challenging problems.',
      background: {
        desktop: '/images/photos/who-we-are/05.png',
        mobile: '/images/photos/who-we-are/05-mobile.png'
      },
      location: (
        <>
          <b>Software</b> as a service
        </>
      ),
      style: { bottom: '9vh', marginTop: '-13.5vh', marginBottom: '10vh' }
    },
    {
      title: 'future.',
      subtitle:
        'or just passionate about creating something new and exciting. We take pride in developing innovative solutions to challenging problems.',
      background: {
        desktop: '/images/photos/who-we-are/06.png',
        mobile: '/images/photos/who-we-are/06-mobile.png'
      },
      location: (
        <>
          <b>Software</b> as a service
        </>
      ),
      style: { bottom: '4vh', marginTop: '-8.5vh' }
    }
  ];
  return (
    <section className="px-4 pt-[25vh] md:pt-[29.5vh]">
      <div className="relative mx-auto mt-28 flex w-[98%] max-w-[106rem] flex-col space-y-2">
        {cards.map(({ title, background, subtitle, location, style }, i) => (
          <WhoWeAreCard
            key={i}
            index={i}
            background={background}
            title={title}
            subtitle={subtitle}
            location={location}
            style={style}
          />
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;
