import { useState } from 'react';

import dynamic from 'next/dynamic';

import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

import AddDaily from '@/components/AddDaily';

import HomeLayout from '@/layouts/Home';

import { PlusSvg } from '@/assets/svgs';

import { ChartsDataType } from '@/types/shared';

import { getTodaysDate, getWeekData } from '@/utils/utils';

const DynamicCharts = dynamic(() => import('@/components/Charts'), {
  ssr: false,
});

export default function Elements({
  data,
  token,
}: {
  token: string;
  data: ChartsDataType;
}) {
  const [addDaily, setAddDaily] = useState(false);

  return (
    <HomeLayout>
      {addDaily ? (
        <AddDaily setAddDaily={setAddDaily} token={token} />
      ) : (
        <>
          <div className='flex flex-col items-center justify-start gap-8 px-10 py-5'>
            <DynamicCharts data={data} />
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

  const responses = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/calories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.user.token}`,
      },
    }),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/calories/consumption`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.user.token}`,
      },
    }),
  ]);

  const data = await Promise.all(responses.map((res) => res.json()));

  const todaysDonutsData = data[0][getTodaysDate()];

  const weekData = getWeekData(data[0]);

  return {
    props: {
      token: session.user.token,
      data: {
        donuts: {
          current: {
            calories: todaysDonutsData ? todaysDonutsData.calories : 0,
            carbohydrates: todaysDonutsData
              ? todaysDonutsData.carbohydrates
              : 0,
            fat: todaysDonutsData ? todaysDonutsData.fat : 0,
            protein: todaysDonutsData ? todaysDonutsData.protein : 0,
          },
          norm: {
            calories: data[1].calories,
            carbohydrates: data[1].carbohydrates,
            fat: data[1].fat,
            protein: data[1].protein,
          },
        },
        weekCalories: weekData[0],
        weekCarbohydrates: weekData[1],
        weekFat: weekData[2],
        weekProtein: weekData[3],
      },
    },
  };
};
