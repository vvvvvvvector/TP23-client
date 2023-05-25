import HomeLayout from '@/layouts/Home';

import { useSession } from 'next-auth/react';

export default function Account() {
  const { data: session } = useSession();

  console.log(session);

  if (!session) {
    return (
      <HomeLayout>
        <span>You aren't signed in!</span>
      </HomeLayout>
    );
  }

  return (
    <HomeLayout>
      Signed in user account info:
      <p>{`what is it: ${session.user.user.email}`}</p>
      {/* <p>{`email: ${session.user?.user.email}`}</p> */}
      {/* <p>{`username: ${session.user?.user.username}`}</p> */}
      {/* <p>{`age: ${session.user?.user.age}`}</p> */}
      {/* <p>{`activity_level: ${session.user?.user.activity_level}`}</p> */}
      {/* <p>{`id: ${session.user?.user.user_id}`}</p> */}
      {/* <p>{`height: ${session.user?.user.height}`}</p> */}
      {/* <p>{`weight: ${session.user?.user.weight}`}</p> */}
      {/* <p>{`img_url: ${session.user?.user.img_url}`}</p> */}
    </HomeLayout>
  );
}
