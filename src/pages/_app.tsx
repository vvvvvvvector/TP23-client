import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Rubik } from 'next/font/google';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { Toaster } from 'react-hot-toast';

import SignUpProvider from '@/providers/SignUpProvider';

import '@/styles/globals.css';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
});

export default function App({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  const title = 'TP23 🎉';

  const mainstyle = `${rubik.className} grid h-full w-full place-items-center`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <SessionProvider session={pageProps.session}>
        <SignUpProvider>
          <main className={mainstyle}>
            <Component {...pageProps} />
            <Toaster position='top-center' />
          </main>
        </SignUpProvider>
      </SessionProvider>
    </>
  );
}
