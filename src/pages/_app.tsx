import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Rubik } from 'next/font/google';

import '@/styles/globals.css';

const roboto = Rubik({
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
        className={`${roboto.className} h-full w-full rounded-2xl bg-white shadow-lg`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
