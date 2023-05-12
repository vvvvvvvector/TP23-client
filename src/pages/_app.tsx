import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Rubik } from 'next/font/google';

import { Toaster } from 'react-hot-toast';

import SignUpProvider from '@/providers/SignUpProvider';

import '@/styles/globals.css';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
});

export default function App({ Component, pageProps }: AppProps) {
  const title = 'TP23 🎉';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main
        className={`${rubik.className} grid h-full w-full place-items-center`}
      >
        <SignUpProvider>
          <Component {...pageProps} />
        </SignUpProvider>
        <Toaster position='top-center' />
      </main>
    </>
  );
}
