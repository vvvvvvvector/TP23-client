import { FC } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='grid h-full w-full place-items-center'>
      <div className='flex h-full w-[550px] flex-col items-center justify-center gap-7'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
