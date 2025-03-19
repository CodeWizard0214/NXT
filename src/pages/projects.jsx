import NavBar from '@/components/Sections/Global/NavBar';
import Gallery from '@/components/Sections/Projects/Gallery';
import Hero from '@/components/Sections/Projects/Hero';
import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Context } from '@/components/Shared/Layout';
import Bolt from '@/components/Sections/Projects/Bolt';
import OurProjects from '@/components/Sections/Projects/OurProjects';
import Details from '@/components/Sections/Projects/Details';
import BannerRing from '@/components/Sections/Global/BannerRing';
import Footer from '@/components/Sections/Global/Footer/Footer';

const Projects = () => {
  const [{ loadingAnimationFinished }] = useContext(Context);
  const [isAnimating, setIsAnimating] = useState(true);
  return (
    <>
      {loadingAnimationFinished && isAnimating && (
        <Gallery onAnimationComplete={() => setIsAnimating(false)} />
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: !isAnimating ? 1 : 0 }}
        transition={{ duration: 1 }}>
        <NavBar />
        <main>
          <Hero loaded={!isAnimating} />
          <Bolt />
          <OurProjects />
          <Details />
          <BannerRing />
        </main>
        <Footer secondary />
      </motion.div>
    </>
  );
};

export default Projects;
