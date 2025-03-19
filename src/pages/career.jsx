import Hero from '@/components/Sections/Career/Hero';
import JobPosts from '@/components/Sections/Career/JobPosts';
import Team from '@/components/Sections/Career/Team/Team';
import Footer from '@/components/Sections/Global/Footer/Footer';
import NavBar from '@/components/Sections/Global/NavBar';
import Culture from "@/components/Sections/Career/Culture";

const Career = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <JobPosts />
        <Culture />
      </main>
      <Footer secondary top={false} background={false} />
    </>
  );
};

export default Career;
