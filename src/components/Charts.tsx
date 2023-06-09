import { FC } from 'react';

import Donuts from './Сharts/Donuts';
import WeekBarChart from './Сharts/WeekBarChart';

import { ChartsDataType } from '@/types/shared';

interface IChartsProps {
  data: ChartsDataType;
}

const Charts: FC<IChartsProps> = ({ data }) => {
  return (
    <>
      <div>
        <h3 className='text-center text-2xl font-semibold'>Today's progress</h3>
        <Donuts data={data.donuts} />
      </div>
      <div>
        <h3 className='text-center text-2xl font-semibold'>
          Statistics for the week
        </h3>
        <div className='flex flex-col gap-8'>
          <WeekBarChart name='Calories' data={data.weekCalories} />
          <WeekBarChart name='Carbohydrates' data={data.weekCarbohydrates} />
          <WeekBarChart name='Fat' data={data.weekFat} />
          <WeekBarChart name='Protein' data={data.weekProtein} />
        </div>
      </div>
    </>
  );
};

export default Charts;
