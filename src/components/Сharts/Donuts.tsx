import { FC } from 'react';

import Calories from './Donuts/Calories';
import Carbohydrates from './Donuts/Carbohydrates';
import Fat from './Donuts/Fat';
import Protein from './Donuts/Protein';

import { DonutsDataType } from '@/types/shared';

interface IDonutsProps {
  data: DonutsDataType;
}

const Donuts: FC<IDonutsProps> = ({ data }) => {
  if (!data) {
    return (
      <div className='w-full p-16 text-center text-lg font-medium'>
        Loading...
      </div>
    );
  }

  return (
    <div className='mt-[25px] flex'>
      <Calories current={data.current.calories} norm={data.norm.calories} />
      <Carbohydrates
        current={data.current.carbohydrates}
        norm={data.norm.carbohydrates}
      />
      <Fat current={data.current.fat} norm={data.norm.fat} />
      <Protein current={data.current.protein} norm={data.norm.protein} />
    </div>
  );
};

export default Donuts;
