import { useRouter } from 'next/router';

import Layout from '@/components/Layout';

export default function Identifier() {
  const router = useRouter();

  return (
    <Layout>
      <h1 className='font-bold text-3xl text-center'>Create your account</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-[85%] shadow-sm flex flex-col gap-8 bg-[#fafafa] py-7 px-10 rounded-2xl border border-[#eaeaea]'
      >
        <div className='block'>
          <label htmlFor='email' className='text-lg'>
            Email address
          </label>
          <input
            name='email'
            type='text'
            className='w-full mt-2 p-3 bg-none focus:border-emerald-300 rounded border border-[#eaeaea]'
            placeholder='example@mail.io'
          />
        </div>
        <div className='block'>
          <label htmlFor='username' className='text-lg'>
            Username
          </label>
          <input
            name='username'
            type='text'
            className='w-full mt-2 p-3 bg-none focus:border-emerald-300 rounded border border-[#eaeaea]'
            placeholder='crazy username'
          />
        </div>
        <button
          onClick={() => router.push('/signup/password')}
          className='w-[100%] font-medium bg-emerald-300 hover:bg-emerald-400 active:bg-emerald-500 transition-[background-color] text-white rounded p-3'
        >
          Next step
        </button>
      </form>
    </Layout>
  );
}
