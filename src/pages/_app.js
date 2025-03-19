import Layout from '@/components/Shared/Layout';
import '@/styles/globals.css';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function App({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ParallaxProvider>
  );
}
