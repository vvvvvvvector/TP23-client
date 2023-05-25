import { useRouter } from 'next/router';

import { useSession } from 'next-auth/react';

import HomeLayout from '@/layouts/Home';

export default function Account() {
  const router = useRouter();

  const { data: session } = useSession();

  if (!session) {
    return <h1 className='text-3xl font-bold'>You aren't signed in</h1>;
  } else if (session.user.data.username !== router.query.user) {
    return (
      <h1 className='text-3xl font-bold'>{`You aren't signed in as ${router.query.user}`}</h1>
    );
  }

  return (
    <HomeLayout>
      Signed in user account info:
      <p>{`email: ${session.user.data.email}`}</p>
      <p>{`username: ${session.user.data.username}`}</p>
      <p>{`age: ${session.user.data.age}`}</p>
      <p>{`activity_level: ${session.user.data.activity}`}</p>
      <p>{`id: ${session.user.data.id}`}</p>
      <p>{`height: ${session.user.data.height}`}</p>
      <p>{`weight: ${session.user.data.weight}`}</p>
      <p>{`img_url: ${session.user.data.imgUrl}`}</p>
    </HomeLayout>
  );
}
