import dynamic from 'next/dynamic';

const DynamicCaloriesPie = dynamic(() => import('@/components/CaloriesPie'), {
  ssr: false,
});

const DynamicFatPie = dynamic(() => import('@/components/FatPie'), {
  ssr: false,
});

const DynamicProteinPie = dynamic(() => import('@/components/ProteinPie'), {
  ssr: false,
});

const DynamicCarbohydratesPie = dynamic(
  () => import('@/components/CarbohydratesPie'),
  { ssr: false }
);

import HomeLayout from '@/layouts/Home';

export default function Calories() {
  return (
    <HomeLayout>
      <div className='flex flex-col items-center justify-start'>
        <div>
          <h3 className='text-center text-2xl'>Today's progress</h3>
          <div className='mt-11 flex'>
            <DynamicCaloriesPie />
            <DynamicFatPie />
            <DynamicProteinPie />
            <DynamicCarbohydratesPie />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
