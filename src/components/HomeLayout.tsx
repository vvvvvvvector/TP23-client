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
      <div className='grid h-full w-[24%] place-items-center border-r border-[#D9D9D9] bg-[#F7F6F6] p-12'>
        <div className='flex w-full justify-between'>
          <span>picture</span>
          <span>username</span>
        </div>
        <div className='flex w-full flex-col gap-12'>
          <button
            onClick={() => router.push(`/${router.query.user}/calories`)}
            className='flex h-[45px] items-center justify-center gap-4 rounded-lg bg-[#EBDCFF] font-bold transition-[background-color] hover:bg-[#BA8AF8]'
          >
            Calories
          </button>
          <button
            onClick={() => router.push(`/${router.query.user}/fridge`)}
            className='h-[45px] rounded-lg bg-[#EBDCFF] font-bold transition-[background-color] hover:bg-[#BA8AF8]'
          >
            Fridge
          </button>
          <button
            onClick={() => router.push(`/${router.query.user}/recipes`)}
            className='h-[45px] rounded-lg bg-[#EBDCFF] font-bold transition-[background-color] hover:bg-[#BA8AF8]'
          >
            Recipes
          </button>
          <button
            onClick={() => router.push(`/${router.query.user}/products`)}
            className='h-[45px] rounded-lg bg-[#EBDCFF] font-bold transition-[background-color] hover:bg-[#BA8AF8]'
          >
            Products
          </button>
          <button
            onClick={() => router.push(`/${router.query.user}`)}
            className='h-[45px] rounded-lg bg-[#EBDCFF] font-bold transition-[background-color] hover:bg-[#BA8AF8]'
          >
            Account
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
          className='h-[45px] w-full rounded-lg bg-red-200 font-bold transition-[background-color] hover:bg-red-300'
        >
          Sign out
        </button>
      </div>
      <div className='grid h-full flex-1 place-items-center'>{children}</div>
    </section>
  );
};

export default HomeLayout;
