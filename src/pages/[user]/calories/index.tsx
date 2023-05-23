import dynamic from 'next/dynamic';

const DynamicCaloriesDonut = dynamic(
  () => import('@/components/CaloriesDonut'),
  {
    ssr: false,
  }
);

const DynamicFatDonut = dynamic(() => import('@/components/FatDonut'), {
  ssr: false,
});

const DynamicProteinDonut = dynamic(() => import('@/components/ProteinDonut'), {
  ssr: false,
});

const DynamicCarbohydratesDonut = dynamic(
  () => import('@/components/CarbohydratesDonut'),
  { ssr: false }
);

import HomeLayout from '@/layouts/Home';

export default function Calories() {
  return (
    <HomeLayout>
      <div className='flex flex-col items-center justify-start gap-3'>
        <div>
          <h3 className='text-center text-2xl font-semibold'>
            Today's progress
          </h3>
          <div className='mt-11 flex'>
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
        </div>
      </div>
    </HomeLayout>
  );
}
