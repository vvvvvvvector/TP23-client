import { FC } from 'react';
import { toast } from 'react-hot-toast';

import { signOut } from 'next-auth/react';

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
    <section className='flex h-full w-full overflow-scroll bg-white'>
      <div className='grid h-full w-[22%] place-items-center border-r border-[#D9D9D9] bg-[#F7F6F6] px-12 max-[720px]:p-5 max-[475px]:w-[30%]'>
        <div className='flex w-full items-center justify-between max-[1000px]:flex-col max-[1000px]:gap-5'>
          <div className='flex h-[56px] w-[56px] items-center justify-center rounded-full bg-gray-400 font-mono font-bold text-gray-700'>
            img
          </div>
          <span>{router.query.user}</span>
        </div>
        <div className='flex w-full flex-col gap-10'>
          <button
            onClick={() => router.push(`/${router.query.user}/calories`)}
            className='flex h-[50px] items-center justify-between rounded-lg border-b-2 border-b-violet-500 bg-violet-200 px-7 transition-[background-color] hover:bg-violet-300 max-[1000px]:justify-center max-[550px]:px-0'
          >
            <CaloriesSvg className='text-[#1E293B]' />
            <span className='font-medium max-[1000px]:hidden'>Calories</span>
          </button>
          <button
            onClick={() => router.push(`/${router.query.user}/fridge`)}
            className='flex h-[50px] items-center justify-between rounded-lg border-b-2 border-b-violet-500 bg-violet-200 px-7 transition-[background-color] hover:bg-violet-300 max-[1000px]:justify-center max-[550px]:px-0'
          >
            <FridgeSvg className='text-[#1E293B]' />
            <span className='font-medium max-[1000px]:hidden'>Fridge</span>
          </button>
          <button
            onClick={() => router.push(`/${router.query.user}/recipes`)}
            className='flex h-[50px] items-center justify-between rounded-lg border-b-2 border-b-violet-500 bg-violet-200 px-7 transition-[background-color] hover:bg-violet-300 max-[1000px]:justify-center max-[550px]:px-0'
          >
            <RecipesSvg className='text-[#1E293B]' />
            <span className='font-medium max-[1000px]:hidden'>Recipes</span>
          </button>
          <button
            onClick={() => router.push(`/${router.query.user}/finances`)}
            className='flex h-[50px] items-center justify-between rounded-lg border-b-2 border-b-violet-500 bg-violet-200 px-7 transition-[background-color] hover:bg-violet-300 max-[1000px]:justify-center max-[550px]:px-0'
          >
            <FinancesSvg className='text-[#1E293B]' />
            <span className='font-medium max-[1000px]:hidden'>Finances</span>
          </button>
          <button
            onClick={() => router.push(`/${router.query.user}`)}
            className='flex h-[50px] items-center justify-between rounded-lg border-b-2 border-b-violet-500 bg-violet-200 px-7 transition-[background-color] hover:bg-violet-300 max-[1000px]:justify-center max-[550px]:px-0'
          >
            <AccountSvg className='text-[#1E293B]' />
            <span className='font-medium max-[1000px]:hidden'>Account</span>
          </button>
        </div>
        <button
          onClick={() => {
            const result = window.confirm('Are you sure you want to sign out?');

            if (result) {
              signOut({
                redirect: false,
              });

              router.push('/');

              toast.success('Signed out successfully!');
            }
          }}
          className='h-[50px] w-full rounded-lg border-b-2 border-b-red-400 bg-red-100 font-bold transition-[background-color] hover:bg-red-300'
        >
          <span className='font-medium'>Sign out</span>
        </button>
      </div>
      <div className='h-full max-h-full flex-1 overflow-scroll px-10 py-5'>
        {children}
      </div>
    </section>
  );
};

export default Home;
