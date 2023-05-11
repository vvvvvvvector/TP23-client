// welcome / start page
// useEffect -> if user token hasn't expired -> redirect to www.page.com/user-name

import { useState } from 'react';

import Link from 'next/link';

import Layout from '@/components/Layout';

export default function Welcome() {
  const [hiddenPassword, setHiddenPassword] = useState(true);

  return (
    <Layout>
      <h1 className='text-center text-3xl font-bold'>Welcome back 🎉</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='flex w-[85%] flex-col gap-8 rounded-2xl border border-[#eaeaea] bg-[#fafafa] px-10 py-7 shadow-sm'
      >
        <div className='block'>
          <label className='text-lg'>Username or email address</label>
          <input
            type='text'
            className='mt-2 w-full rounded border border-[#eaeaea] bg-none p-3 focus:border-emerald-300'
            placeholder='example@mail.io / your crazy username'
          />
        </div>
        <div className='block'>
          <label className='text-lg'>Password</label>
          <div className='mt-2 flex rounded border border-[#eaeaea] bg-white focus-within:border-emerald-300'>
            <input
              type={hiddenPassword ? 'password' : 'text'}
              className='w-[85%] rounded bg-none p-3'
              placeholder='super secret password'
            />
            <div
              onClick={() => setHiddenPassword(!hiddenPassword)}
              className='flex flex-1 cursor-pointer items-center justify-center rounded-r-[0.25rem] transition-[background-color] hover:bg-gray-100'
            >
              <span className='text-[23px]'>
                {hiddenPassword ? '🙈' : '🙉'}
              </span>
            </div>
          </div>
        </div>
        <button
          type='submit'
          className='rounded bg-emerald-300 p-3 font-medium text-white transition-[background-color] hover:bg-emerald-400 active:bg-emerald-500'
        >
          Sign in
        </button>
      </form>
      <div className='flex w-[85%] justify-center gap-3 p-4 font-semibold'>
        <span>Don't have an account?</span>
        <Link href='/signup/identifier'>
          <span className='cursor-pointer text-blue-400 hover:text-blue-500 hover:underline'>
            Sign up
          </span>
        </Link>
      </div>
    </Layout>
  );
}
