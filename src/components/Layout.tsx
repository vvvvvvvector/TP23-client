import { FC } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='h-full w-full grid place-items-center'>
      <div className='flex justify-center flex-col items-center gap-7 h-full w-[550px]'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
