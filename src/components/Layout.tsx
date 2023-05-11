import { FC } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <section className=' h-[90%] w-[65%] rounded-2xl bg-white shadow-lg max-[645px]:h-[95%] max-[645px]:w-[94%]'>
      <div className='grid h-full w-full place-items-center'>
        <div className='flex h-full w-full max-w-[550px] flex-col items-center justify-center gap-7'>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Layout;
