import { FC } from 'react';

import Donuts from './Donuts';
import WeekBarChart from './WeekBarChart';

import { DonutsDataType } from '@/types/shared';

interface IChartsProps {
  data: {
    donuts: DonutsDataType;
    weekCalories: number[];
    weekCarbohydrates: number[];
    weekFat: number[];
    weekProtein: number[];
  };
}

const Charts: FC<IChartsProps> = ({ data }) => {
  return (
    <>
      <div>
        <h3 className='text-center text-2xl font-semibold'>Today's progress</h3>
        <Donuts data={data.donuts} />
      </div>
      <div className='overflow-scroll'>
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
