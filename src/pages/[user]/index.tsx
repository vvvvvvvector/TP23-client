import { GetServerSideProps } from 'next';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

import { DefaultUserImage } from '@/assets/svgs';

import HomeLayout from '@/layouts/Home';

import { SessionUserType } from '@/types/shared';

export default function Account({ user }: { user: SessionUserType }) {
  return (
    <HomeLayout>
      <div className='grid h-full w-full place-items-center'>
        <div className='flex w-[55%] flex-col gap-10'>
          <div className='flex w-full justify-center'>
            <div className='flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-gray-300 font-mono font-bold text-gray-700'>
              {user.data.imgUrl || (
                <DefaultUserImage className='scale-[2.45] transform' />
              )}
            </div>
          </div>
          <p className='text-lg'>{`Username: ${user.data.username}`}</p>
          <p className='text-lg'>{`Email: ${user.data.email}`}</p>
          <p className='text-lg'>{`Sex: ${
            user.data.sex === 'm' ? 'male 🧔‍♂️' : 'female 👩'
          }`}</p>
          <p className='text-lg'>{`Age: ${user.data.age}`}</p>
          <p className='text-lg'>{`Activity level: ${user.data.activity}`}</p>
          <p className='text-lg'>{`Height: ${user.data.height} cm.`}</p>
          <p className='text-lg'>{`Weight: ${user.data.weight} kg.`}</p>
          <button
            type='submit'
            className='flex w-[100%] items-center justify-center rounded bg-green-300 p-3 font-medium text-white transition-[background-color] hover:bg-green-400 active:bg-green-500 disabled:bg-gray-200'
          >
            <span>Update profile</span>
          </button>
        </div>
      </div>
    </HomeLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  params,
}) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/refused',
        permanent: false,
      },
    };
  }

  if (session.user.data.username !== params?.user) {
    return {
      redirect: {
        destination: `/${params?.user}/notyou`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session.user,
    },
  };
};
