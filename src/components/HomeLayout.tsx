import { FC } from 'react';

import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <section className='flex h-full w-full bg-white'>
      <div className='grid h-full w-[24%] place-items-center border-r border-[#D9D9D9] bg-[#F7F6F6]'>
        <button
          onClick={() => router.push(`/${router.query.user}/calories`)}
          className='rounded-lg bg-[#EBDCFF] px-20 py-3 font-bold transition-[background-color] hover:bg-[#BA8AF8]'
        >
          Calories
        </button>
        <button
          onClick={() => router.push(`/${router.query.user}/fridge`)}
          className='rounded-lg bg-[#EBDCFF] px-20 py-3 font-bold transition-[background-color] hover:bg-[#BA8AF8]'
        >
          Fridge
        </button>
        <button
          onClick={() => router.push(`/${router.query.user}/recipes`)}
          className='rounded-lg bg-[#EBDCFF] px-20 py-3 font-bold transition-[background-color] hover:bg-[#BA8AF8]'
        >
          Recipes
        </button>
        <button
          onClick={() => router.push(`/${router.query.user}/products`)}
          className='rounded-lg bg-[#EBDCFF] px-20 py-3 font-bold transition-[background-color] hover:bg-[#BA8AF8]'
        >
          Products
        </button>
        <button
          onClick={() => router.push(`/${router.query.user}`)}
          className='rounded-lg bg-[#EBDCFF] px-20 py-3 font-bold transition-[background-color] hover:bg-[#BA8AF8]'
        >
          Account
        </button>
        <button
          onClick={() => {
            const result = window.confirm('Are you sure you want to sign out?');

            if (result) {
              router.push('/');
              toast.success('Signed out successfully!');
            }
          }}
          className='rounded-lg bg-red-200 px-20 py-3 font-bold transition-[background-color] hover:bg-red-300'
        >
          Sign out
        </button>
      </div>
      <div className='grid h-full flex-1 place-items-center'>{children}</div>
    </section>
  );
};

export default HomeLayout;
