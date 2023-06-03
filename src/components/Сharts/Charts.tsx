import { FC, useState, useEffect } from 'react';

import Donuts from './Donuts';

import WeekBarChart from './WeekBarChart';

import { DonutsDataType } from '@/types/shared';
import { getTodaysDate, getWeekCaloriesData } from '@/utils/utils';

interface IChartsProps {
  token: string;
}

const Charts: FC<IChartsProps> = ({ token }) => {
  const [weekData, setWeekData] = useState<number[] | null>(null);
  const [donutsData, setDonutsData] = useState<DonutsDataType>(null);

  useEffect(() => {
    const getData = async () => {
      const responses = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/calories`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/calories/consumption`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);

      const data = await Promise.all(responses.map((res) => res.json()));

      const todaysDonutsData = data[0][getTodaysDate()];

      const weekData = getWeekCaloriesData(data[0]);

      setWeekData(weekData);

      setDonutsData({
        current: {
          calories: todaysDonutsData ? todaysDonutsData.calories : 0,
          carbohydrates: todaysDonutsData ? todaysDonutsData.carbohydrates : 0,
          fat: todaysDonutsData ? todaysDonutsData.fat : 0,
          protein: todaysDonutsData ? todaysDonutsData.protein : 0,
        },
        norm: {
          calories: data[1].calories,
          carbohydrates: data[1].carbohydrates,
          fat: data[1].fat,
          protein: data[1].protein,
        },
      });
    };

    try {
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div>
        <h3 className='text-center text-2xl font-semibold'>Today's progress</h3>
        <Donuts data={donutsData} />
      </div>
      <div>
        <h3 className='text-center text-2xl font-semibold'>
          Statistics for the week
        </h3>
        <WeekBarChart data={weekData} />
      </div>
      <div>
        <h3 className='text-center text-2xl font-semibold'>
          Statistics for the month
        </h3>
        {/* <WeekBarChart data={[1000, 1953, 1500, 1800, 1506, 2100, 1000]} /> */}
      </div>
    </>
  );
};

export default Charts;
