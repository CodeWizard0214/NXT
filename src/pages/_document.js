import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className='mini-screen:text-[14px]'>
      <Head />
      <body className="bg-black font-inter text-white w-full h-full relative overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
