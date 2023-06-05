import { useState } from 'react';

import { useRouter } from 'next/router';

import { getToken } from 'next-auth/jwt';

import { useSession } from 'next-auth/react';

import AddDaily from '@/components/AddDaily';
import Charts from '@/components/Сharts/Charts';

import HomeLayout from '@/layouts/Home';

import { PlusSvg } from '@/assets/svgs';

import { getTodaysDate, getWeekData } from '@/utils/utils';

export const getServerSideProps = async (context: any) => {
  const session = await getToken({ req: context.req });

  if (!session) {
    return {
      props: {},
    };
  }

  const responses = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/calories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.token}`,
      },
    }),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/calories/consumption`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.token}`,
      },
    }),
  ]);

  const data = await Promise.all(responses.map((res) => res.json()));

  const todaysDonutsData = data[0][getTodaysDate()];

  const weekData = getWeekData(data[0]);

  return {
    props: {
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

export default function Calories({ data }: { data: any }) {
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
            <Charts data={data} />
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
