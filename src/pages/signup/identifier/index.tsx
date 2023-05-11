import { useRouter } from 'next/router';

import Layout from '@/components/Layout';

export default function Identifier() {
  const router = useRouter();

  return (
    <Layout>
      <h1 className='text-center text-3xl font-bold'>Create your account</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='flex w-[85%] flex-col gap-8 rounded-2xl border border-[#eaeaea] bg-[#fafafa] px-10 py-7 shadow-sm'
      >
        <div className='block'>
          <label className='text-lg'>Email address</label>
          <input
            type='text'
            className='mt-2 w-full rounded border border-[#eaeaea] bg-none p-3 focus:border-emerald-300'
            placeholder='example@mail.io'
          />
        </div>
        <div className='block'>
          <label className='text-lg'>Username</label>
          <input
            type='text'
            className='mt-2 w-full rounded border border-[#eaeaea] bg-none p-3 focus:border-emerald-300'
            placeholder='crazy username'
          />
        </div>
        <button
          onClick={() => router.push('/signup/password')}
          className='w-[100%] rounded bg-emerald-300 p-3 font-medium text-white transition-[background-color] hover:bg-emerald-400 active:bg-emerald-500'
        >
          Next step
        </button>
      </form>
    </Layout>
  );
}
