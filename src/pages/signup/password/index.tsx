import { useRouter } from 'next/router';

import Layout from '@/components/Layout';

export default function Password() {
  const router = useRouter();

  return (
    <Layout>
      <h1 className='text-center text-3xl font-bold'>Create a password 🔒</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='flex w-[85%] flex-col gap-8 rounded-2xl border border-[#eaeaea] bg-[#fafafa] px-10 py-7 shadow-sm'
      >
        <div className='block'>
          <label htmlFor='password' className='text-lg'>
            Password
          </label>
          <input
            name='password'
            type='password'
            className='mt-2 w-full rounded border border-[#eaeaea] bg-none p-3 focus:border-emerald-300'
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
            className='mt-2 w-full rounded border border-[#eaeaea] bg-none p-3 focus:border-emerald-300'
            placeholder='repeat secret'
          />
        </div>
        <button
          onClick={() => router.push('/signup/personal')}
          className='w-[100%] rounded bg-emerald-300 p-3 font-medium text-white transition-[background-color] hover:bg-emerald-400 active:bg-emerald-500'
        >
          Next step
        </button>
      </form>
    </Layout>
  );
}
