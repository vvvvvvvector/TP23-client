import { useRouter } from 'next/router';

import { useSession } from 'next-auth/react';

import { DefaultUserImage } from '@/assets/svgs';

import HomeLayout from '@/layouts/Home';

export default function Account() {
  const router = useRouter();

  const { data: session } = useSession();

  if (!session) {
    return <h1 className='text-3xl font-bold'>You aren't signed in 😭</h1>;
  } else if (session.user.data.username !== router.query.user) {
    return (
      <h1 className='text-3xl font-bold'>{`You aren't signed in as ${router.query.user}`}</h1>
    );
  }

  return (
    <HomeLayout>
      <div className='grid h-full w-full place-items-center'>
        <div className='flex w-[55%] flex-col gap-10'>
          <div className='flex w-full justify-center'>
            <div className='flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-gray-300 font-mono font-bold text-gray-700'>
              {session.user.data.imgUrl || (
                <DefaultUserImage className='scale-[2.45] transform' />
              )}
            </div>
          </div>
          <p className='text-lg'>{`Username: ${session.user.data.username}`}</p>
          <p className='text-lg'>{`Email: ${session.user.data.email}`}</p>
          <p className='text-lg'>{`Sex: ${
            session.user.data.sex === 'm' ? 'male 🧔‍♂️' : 'female 👩'
          }`}</p>
          <p className='text-lg'>{`Age: ${session.user.data.age}`}</p>
          <p className='text-lg'>{`Activity level: ${session.user.data.activity}`}</p>
          <p className='text-lg'>{`Height: ${session.user.data.height} cm.`}</p>
          <p className='text-lg'>{`Weight: ${session.user.data.weight} kg.`}</p>
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
