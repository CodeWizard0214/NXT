import Image from 'next/image';
import styles from './style.module.css';
import Link from 'next/link';

const TeamCard = ({ name, username, position, photo }) => {
  return (
    <Link
      href="#"
      className="overflow-hidden rounded-2xl border"
      style={{ borderColor: '#333333' }}>
      <div className="relative">
        <Image className="w-full" src={photo} width="308" height="308" alt="Clemens Kauscke" />
        <Image
          className="absolute top-0 left-0 h-full w-full rounded-xl p-2"
          src={photo}
          width="308"
          height="308"
          alt="Clemens Kauscke"
        />
      </div>
      <div className="bg-black/40 py-2 pl-4 pr-3 h-full">
        <div className="flex items-center justify-between">
          <div className="font-medium">{name}</div>
          <div className="text-sm text-gray">{username}</div>
        </div>
        <div className="mt-1 text-gray">{position}</div>
      </div>
    </Link>
  );
};

const Team = () => {
  return (
    <section className="relative overflow-hidden px-6 pt-9 sm:px-8 md:px-20 md:pt-16 xl:px-32">
      <div
        style={{
          height: '0.0625rem',
          background:
            'linear-gradient(90deg, #D9D9D9 0%, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0) 100%)'
        }}
        className="absolute top-0 left-0 w-full"></div>
      <div className="relative mx-auto max-w-7xl">
        <div className="whitespace-nowrap font-eurostar-extended text-5xl uppercase !leading-tight md:text-[4rem]">
          <div style={{ color: '#222222' }}>
            Hello. Hallo. Hola. Hej. Hoi. Hai. Bonjour. Ciao. Namaste. Tere.
          </div>
          <div className={styles.textOutline}>Hai. Bonjour. Ciao. Namaste. Tere.</div>
        </div>

        <h2 className="mt-16 max-w-sm text-3xl font-semibold md:mt-10 md:max-w-md md:text-4.5xl">
          We are 8 people and our office is the world.
        </h2>
        <p className="mt-4 max-w-sm text-sm font-medium text-gray md:mt-6 md:max-w-lg md:text-xl md:font-normal">
          Our meticulous interactions, delightful wordplay, and beautiful experiences come together
          across the globe. Remote, but together.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <TeamCard
            name="Clemens Kauscke"
            username="@legendarise"
            position="CEO"
            photo="/images/photos/team/clemens.jpg"
          />
          <TeamCard
            name="Marin Delija"
            username="@legendarise"
            position="@marin"
            photo="/images/photos/team/marin.jpg"
          />
          <TeamCard
            name="Julian Förster"
            username="@julianfoerster_"
            position="Product Manager"
            photo="/images/photos/team/julian.jpg"
          />
          <TeamCard
            name="Arthur Grabowski"
            username="@arthur.gbw"
            position="Head of Design"
            photo="/images/photos/team/arthur.jpg"
          />
          <TeamCard
            name="Paul Richter"
            username="@prxmotion"
            position="CEO NXTSPORT"
            photo="/images/photos/team/richter.jpg"
          />
          <TeamCard
            name="Niklas Hochscheid"
            username="@nikimedia"
            position="Photograph"
            photo="/images/photos/team/niklas.jpg"
          />
          <TeamCard
            name="Nils Blank"
            username="@nils.blank"
            position="Videograph"
            photo="/images/photos/team/nils.jpg"
          />
          <TeamCard
            name="Alan Mac Cormack"
            username="IT-Developer"
            position="@eyesofthevoid"
            photo="/images/photos/team/alan.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
