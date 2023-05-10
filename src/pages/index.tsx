// welcome / start page
// useEffect -> if user token hasn't expired -> redirect to www.page.com/user-name

import { useState } from 'react';

import Link from 'next/link';

import Layout from '@/components/Layout';

export default function Welcome() {
  const [hiddenPassword, setHiddenPassword] = useState(true);

  return (
    <Layout>
      <h1 className='font-bold text-3xl text-center'>Welcome back 🎉</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-[85%] shadow-sm flex flex-col gap-8 bg-[#fafafa] py-7 px-10 rounded-2xl border border-[#eaeaea]'
      >
        <div className='block'>
          <label htmlFor='usernameOrEmail' className='text-lg'>
            Username or email address
          </label>
          <input
            name='usernameOrEmail'
            type='text'
            className='w-full mt-2 p-3 bg-none focus:border-emerald-300 rounded border border-[#eaeaea]'
            placeholder='example@mail.io / your crazy username'
          />
        </div>
        <div className='block'>
          <label htmlFor='password' className='text-lg'>
            Password
          </label>
          <div className='mt-2 rounded bg-white flex border border-[#eaeaea] focus-within:border-emerald-300'>
            <input
              name='password'
              type={hiddenPassword ? 'password' : 'text'}
              className='bg-none p-3 rounded w-[85%]'
              placeholder='super secret password'
            />
            <div
              onClick={() => setHiddenPassword(!hiddenPassword)}
              className='rounded-r-[0.25rem] cursor-pointer flex flex-1 justify-center items-center hover:bg-gray-100 transition-[background-color]'
            >
              <span className='text-[23px]'>
                {hiddenPassword ? '🙈' : '🙉'}
              </span>
            </div>
          </div>
        </div>
        <button
          type='submit'
          className='font-medium bg-emerald-300 hover:bg-emerald-400 active:bg-emerald-500 transition-[background-color] text-white rounded p-3'
        >
          Sign in
        </button>
      </form>
      <div className='w-[85%] font-semibold flex justify-center p-4 gap-3'>
        <span>Don't have an account?</span>
        <Link href='/signup/identifier'>
          <span className='text-blue-400 cursor-pointer hover:text-blue-500 hover:underline'>
            Sign up
          </span>
        </Link>
      </div>
    </Layout>
  );
}
