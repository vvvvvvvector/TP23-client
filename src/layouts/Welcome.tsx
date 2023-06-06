import { FC } from 'react';

import { useRouter } from 'next/router';

interface WelcomeProps {
  children: React.ReactNode;
}

const Stepper = () => {
  const router = useRouter();

  return (
    <>
      {router.asPath !== '/' && (
        <div className='flex w-full max-w-[90%] flex-row items-center justify-center'>
          <button
            onClick={() => router.push('/signup/identifier')}
            className='inline-block h-10 w-[40px] max-w-[40px] rounded-full border-2 border-emerald-300 text-center font-semibold disabled:border-gray-300'
          >
            1
          </button>
          <div
            className={`h-[2px] w-[170px] max-[560px]:w-[90px] ${
              router.asPath === '/signup/password' ||
              router.asPath === '/signup/personal'
                ? 'bg-emerald-300'
                : 'bg-gray-300'
            }`}
          ></div>
          <button
            onClick={() => router.push('/signup/password')}
            disabled={router.asPath === '/signup/identifier'}
            className='inline-block h-10 w-[40px] max-w-[40px] rounded-full border-2 border-emerald-300 text-center font-semibold disabled:border-gray-300'
          >
            2
          </button>
          <div
            className={`h-[2px] w-[170px] max-[560px]:w-[90px] ${
              router.asPath === '/signup/personal'
                ? 'bg-emerald-300'
                : 'bg-gray-300'
            }`}
          ></div>
          <button
            onClick={() => router.push('/signup/personal')}
            disabled={
              router.asPath === '/signup/identifier' ||
              router.asPath === '/signup/password'
            }
            className='inline-block h-10 w-[40px] max-w-[40px] rounded-full border-2 border-emerald-300 text-center font-semibold disabled:border-gray-300'
          >
            3
          </button>
        </div>
      )}
    </>
  );
};

const Welcome: FC<WelcomeProps> = ({ children }) => {
  const router = useRouter();

  return (
    <section className='h-[96%] w-[95%] max-w-[1000px] rounded-2xl bg-white shadow-lg max-[645px]:h-[95%]'>
      <div className='grid h-full w-full place-items-center'>
        <div className='flex h-full w-full max-w-[550px] flex-col items-center justify-center gap-5'>
          <Stepper />
          {children}
          <div className='flex w-[85%] items-center justify-center gap-3 p-4 font-semibold max-[450px]:flex-col'>
            <span>
              {router.asPath === '/'
                ? "Don't have an account?"
                : 'Already have an account?'}
            </span>
            <span
              onClick={
                router.asPath === '/'
                  ? () => router.push('/signup/identifier')
                  : () => router.push('/')
              }
              className='cursor-pointer text-blue-400 hover:text-blue-500 hover:underline'
            >
              {router.asPath === '/' ? 'Sign up' : 'Log in'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
