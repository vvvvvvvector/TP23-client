import { FC } from 'react';
import { toast } from 'react-hot-toast';

import { useRouter } from 'next/router';
import {
  AccountSvg,
  CaloriesSvg,
  FinancesSvg,
  FridgeSvg,
  RecipesSvg,
} from '@/assets/svgs';

interface HomeProps {
  children: React.ReactNode;
}

const Home: FC<HomeProps> = ({ children }) => {
  const router = useRouter();

  return (
    <section className='flex h-full w-full bg-white'>
      <div className='grid h-full w-[24%] place-items-center border-r border-[#D9D9D9] bg-[#F7F6F6] p-12'>
        <div className='flex w-full items-center justify-between'>
          <div
            className='flex items-center justify-center rounded-full bg-gray-400 font-mono font-bold text-gray-700'
            style={{
              height: '56px',
              width: '56px',
            }}
          >
            img
          </div>
          <span>{router.query.user}</span>
        </div>
        <div className='flex w-full flex-col gap-10'>
          <button
            onClick={() => router.push(`/${router.query.user}/calories`)}
            className='flex h-[50px] items-center justify-between rounded-lg bg-violet-300 px-7 transition-[background-color] hover:bg-violet-400'
          >
            <CaloriesSvg className='text-[#1E293B]' />
            <span className='font-medium'>Calories</span>
          </button>
          <button
            onClick={() => router.push(`/${router.query.user}/fridge`)}
            className='flex h-[50px] items-center justify-between rounded-lg bg-violet-300 px-7 transition-[background-color] hover:bg-violet-400'
          >
            <FridgeSvg className='text-[#1E293B]' />
            <span className='font-medium'>Fridge</span>
          </button>
          <button
            onClick={() => router.push(`/${router.query.user}/recipes`)}
            className='flex h-[50px] items-center justify-between rounded-lg bg-violet-300 px-7 transition-[background-color] hover:bg-violet-400'
          >
            <RecipesSvg className='text-[#1E293B]' />
            <span className='font-medium'>Recipes</span>
          </button>
          <button
            onClick={() => router.push(`/${router.query.user}/finances`)}
            className='flex h-[50px] items-center justify-between rounded-lg bg-violet-300 px-7 transition-[background-color] hover:bg-violet-400'
          >
            <FinancesSvg className='text-[#1E293B]' />
            <span className='font-medium'>Finances</span>
          </button>
          <button
            onClick={() => router.push(`/${router.query.user}`)}
            className='flex h-[50px] items-center justify-between rounded-lg bg-violet-300 px-7 transition-[background-color] hover:bg-violet-400'
          >
            <AccountSvg className='text-[#1E293B]' />
            <span className='font-medium'>Account</span>
          </button>
        </div>
        <button
          onClick={() => {
            const result = window.confirm('Are you sure you want to sign out?');

            if (result) {
              router.push('/');
              toast.success('Signed out successfully!');
            }
          }}
          className='h-[40px] w-full rounded-lg bg-red-100 font-bold transition-[background-color] hover:bg-red-300'
        >
          <span className='font-medium'>Sign out</span>
        </button>
      </div>
      <div className='grid h-full flex-1 place-items-center'>{children}</div>
    </section>
  );
};

export default Home;
