import { useRouter } from 'next/router';

import Layout from '@/components/Layout';

export default function Password() {
  const router = useRouter();

  return (
    <Layout>
      <h1 className='font-bold text-3xl text-center'>Create a password 🔒</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-[85%] shadow-sm flex flex-col gap-8 bg-[#fafafa] py-7 px-10 rounded-2xl border border-[#eaeaea]'
      >
        <div className='block'>
          <label htmlFor='password' className='text-lg'>
            Password
          </label>
          <input
            name='password'
            type='password'
            className='w-full mt-2 p-3 bg-none focus:border-emerald-300 rounded border border-[#eaeaea]'
            placeholder='secret'
          />
        </div>
        <div className='block'>
          <label htmlFor='repeatPassword' className='text-lg'>
            Repeat password
          </label>
          <input
            name='repeatPassword'
            type='password'
            className='w-full mt-2 p-3 bg-none focus:border-emerald-300 rounded border border-[#eaeaea]'
            placeholder='repeat secret'
          />
        </div>
        <button
          onClick={() => router.push('/signup/personal')}
          className='w-[100%] font-medium bg-emerald-300 hover:bg-emerald-400 active:bg-emerald-500 transition-[background-color] text-white rounded p-3'
        >
          Next step
        </button>
      </form>
    </Layout>
  );
}
