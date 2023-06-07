import { GetServerSideProps } from 'next';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

import HomeLayout from '@/layouts/Home';

export default function Recipes() {
  return (
    <HomeLayout>
      <div className='h-full w-full px-10 py-5'>Recipes</div>
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
    props: {},
  };
};
