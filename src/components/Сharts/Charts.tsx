import { FC, useState, useEffect } from 'react';

import Donuts from './Donuts';

import WeekBarChart from './WeekBarChart';

import { DonutsDataType } from '@/types/shared';
import { getTodaysDate, getWeekData } from '@/utils/utils';

interface IChartsProps {
  token: string;
}

const Charts: FC<IChartsProps> = ({ token }) => {
  const [weekCaloriesData, setWeekCaloriesData] = useState<number[] | null>(
    null
  );
  const [weekCarbohydratesData, setWeekCarbohydratesData] = useState<
    number[] | null
  >(null);
  const [weekFatData, setWeekFatData] = useState<number[] | null>(null);
  const [weekProteinData, setWeekProteinData] = useState<number[] | null>(null);
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

      const weekData = getWeekData(data[0]);

      setWeekCaloriesData(weekData[0]);
      setWeekCarbohydratesData(weekData[1]);
      setWeekFatData(weekData[2]);
      setWeekProteinData(weekData[3]);

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
        <div className='no-scrollbar flex flex-col gap-9'>
          <WeekBarChart name='Calories' data={weekCaloriesData} />
          <WeekBarChart name='Carbohydrates' data={weekCarbohydratesData} />
          <WeekBarChart name='Fat' data={weekFatData} />
          <WeekBarChart name='Protein' data={weekProteinData} />
        </div>
      </div>
    </>
  );
};

export default Charts;
