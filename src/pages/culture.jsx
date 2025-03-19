import Adaption from '@/components/Sections/Culture/Adaption';
import BehindBrand from '@/components/Sections/Culture/BehindBrand';
import BehindBrand2 from '@/components/Sections/Culture/BehindBrand2/BehindBrand2';
import CultureCode from '@/components/Sections/Culture/CultureCode';
import Hero from '@/components/Sections/Culture/Hero/Hero';
import TheCode from '@/components/Sections/Culture/TheCode/TheCode';
import BannerRing from '@/components/Sections/Global/BannerRing';
import Footer from '@/components/Sections/Global/Footer/Footer';
import NavBar from '@/components/Sections/Global/NavBar';
import 'swiper/css';
import 'swiper/css/navigation';

const Culture = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <TheCode />
        <BehindBrand />
        <Adaption />
        <CultureCode />
        <BehindBrand2 />
        <BannerRing />
      </main>
      <Footer secondary />
    </>
  );
};

export default Culture;
