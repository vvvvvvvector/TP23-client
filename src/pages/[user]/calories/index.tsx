import { useRouter } from 'next/router';

import { useSession } from 'next-auth/react';

import dynamic from 'next/dynamic';

const DynamicCaloriesDonut = dynamic(
  () => import('@/components/Donuts/Calories'),
  {
    ssr: false,
  }
);

const DynamicFatDonut = dynamic(() => import('@/components/Donuts/Fat'), {
  ssr: false,
});

const DynamicProteinDonut = dynamic(
  () => import('@/components/Donuts/Protein'),
  {
    ssr: false,
  }
);

const DynamicCarbohydratesDonut = dynamic(
  () => import('@/components/Donuts/Carbohydrates'),
  { ssr: false }
);

const DynamicWeekBarChart = dynamic(() => import('@/components/WeekBarChart'), {
  ssr: false,
});

import HomeLayout from '@/layouts/Home';

export default function Calories() {
  const router = useRouter();

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
      <div className='no-scrollbar flex flex-col items-center justify-start gap-8'>
        <div>
          <h3 className='text-center text-2xl font-semibold'>
            Today's progress
          </h3>
          <div className='mt-[25px] flex'>
            <DynamicCaloriesDonut />
            <DynamicFatDonut />
            <DynamicProteinDonut />
            <DynamicCarbohydratesDonut />
          </div>
        </div>
        <div>
          <h3 className='text-center text-2xl font-semibold'>
            Statistics for the week
          </h3>
          <DynamicWeekBarChart />
        </div>
        <div>
          <h3 className='text-center text-2xl font-semibold'>
            Statistics for the month
          </h3>
          <DynamicWeekBarChart />
        </div>
      </div>
    </HomeLayout>
  );
}
