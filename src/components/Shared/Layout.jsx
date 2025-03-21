import Head from 'next/head';
import { createContext, useEffect, useReducer, useState } from 'react';

import { Manrope, Inter } from '@next/font/google';
import Loading from '../Sections/Global/Loading/Loading';
import reducer from '@/hooks/useReducer';

const manrope = Manrope({
  display: 'optional',
  subsets: ['latin']
});

const inter = Inter({
  display: 'optional',
  subsets: ['latin']
});

const initialState = { loadingAnimationFinished: false };

export const Context = createContext(initialState);

const Layout = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [state.loadingAnimationFinished]);

  let isPageLoaded = loaded && state.loadingAnimationFinished;

  return (
    <>
      <Head>
        <title>NXTYOU - Make Your Vision Come Reality.</title>
        <meta
          name="description"
          content="We are Designer. Developer. Videographers. Analysts. Managers. Doers. Creatives. Thinkers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <style>
          {`
            :root {
              --font-manrope: ${manrope.style.fontFamily};
              --font-inter: ${inter.style.fontFamily};
            }

            body {
              overflow: ${isPageLoaded ? 'auto' : 'hidden'}
            }
          `}
        </style>
      </Head>
      <Context.Provider value={[state, dispatch]}>
        {isPageLoaded ? null : <Loading />}
        {children}
      </Context.Provider>
    </>
  );
};

export default Layout;
