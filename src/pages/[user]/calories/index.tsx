import { useState } from 'react';

import { useRouter } from 'next/router';

import { useSession } from 'next-auth/react';

import AddDaily from '@/components/AddDaily';
import Charts from '@/components/Сharts/Charts';

import HomeLayout from '@/layouts/Home';

import { PlusSvg } from '@/assets/svgs';

export default function Calories() {
  const router = useRouter();

  const [addDaily, setAddDaily] = useState(false);

  const { data: session } = useSession();

  if (!session) {
    return <h1 className='text-3xl font-bold'>You aren't signed in 😭</h1>;
  } else if (session.user.data.username !== router.query.user) {
    return (
      <h1 className='text-3xl font-bold'>{`You aren't signed in as ${router.query.user} 🤔`}</h1>
    );
  }

  return (
    <HomeLayout>
      {addDaily ? (
        <AddDaily setAddDaily={setAddDaily} token={session.user.token} />
      ) : (
        <>
          <div className='flex flex-col items-center justify-start gap-8 px-10 py-5'>
            <Charts token={session.user.token} />
          </div>
          <button
            onClick={() => setAddDaily(true)}
            className='fixed bottom-8 right-8  rounded-full bg-green-300 p-6 shadow-lg transition-[background-color] hover:bg-green-400'
          >
            <PlusSvg />
          </button>
        </>
      )}
    </HomeLayout>
  );
}
