import Footer from '@/components/Sections/Global/Footer/Footer';
import NavBar from '@/components/Sections/Global/NavBar';
import End from '@/components/Sections/Homepage/End';
import Middle from '@/components/Sections/Homepage/Middle';
import Start from '@/components/Sections/Homepage/Start';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Start />
        <Middle/>
        <End/>
      </main>
      <Footer />
    </>
  );
}
