import Image from 'next/image';
import styles from './style.module.css';

const ImageCard = ({ src, className }) => {
  return (
    <Image
      className={`rounded-2xl mx-auto ${className}`}
      src={src}
      width="576"
      height="618"
      alt=""
    />
  );
};

const BehindBrand2 = () => {
  return (
    <section className="px-6 py-16 sm:px-8 md:px-20 md:py-48 xl:px-32">
      <div className="mx-auto flex flex-col lg:flex-row max-w-7xl justify-between lg:space-x-16">
        <div>
          <div className="top-40 max-w-lg lg:sticky md:text-center md:mx-auto lg:text-left lg:mx-0">
            <h2 className="font-eurostar-extended text-4.5xl leading-none md:text-6xl lg:max-w-lg">
              BEHIND THE <span className="text-blue-gradient">BRAND</span>
            </h2>

            <p className="text-md mt-2 font-manrope font-medium text-dusty-gray md:mt-4 md:text-xl md:font-normal">
              Wir lieben die Zusammenarbeit mit Marken, die unsere Vision teilen, etwas wirklich
              Einzigartiges und Außergewöhnliches zu schaffen.
            </p>
          </div>
        </div>
        <div className="space-y-8 md:space-y-16 lg:space-y-32 mt-9 lg:mt-0">
          <ImageCard src="/images/photos/behind-brand-2/01.jpg" className={styles.dropShadow1} />
          <ImageCard src="/images/photos/behind-brand-2/02.jpg" className={styles.dropShadow2} />
          <ImageCard src="/images/photos/behind-brand-2/03.jpg" className={styles.dropShadow3} />
        </div>
      </div>
    </section>
  );
};

export default BehindBrand2;
