import { useRouter } from 'next/router';

import { useSession } from 'next-auth/react';

import HomeLayout from '@/layouts/Home';

export default function Finances() {
  const router = useRouter();

  const { data: session } = useSession();

  if (!session) {
    return <h1 className='text-3xl font-bold'>You aren't signed in</h1>;
  } else if (session.user.data.username !== router.query.user) {
    return (
      <h1 className='text-3xl font-bold'>{`You aren't signed in as ${router.query.user}`}</h1>
    );
  }

  return <HomeLayout>Finances</HomeLayout>;
}
