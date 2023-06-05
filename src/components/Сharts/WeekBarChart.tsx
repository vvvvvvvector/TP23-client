import { FC } from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import { daysNames } from '@/utils/utils';

interface IWeekBarChartProps {
  data: number[] | null;
  name: string;
}

const WeekBarChart: FC<IWeekBarChartProps> = ({ data, name }) => {
  if (!data) {
    return (
      <div className='w-full p-16 text-center text-lg font-medium'>
        Loading...
      </div>
    );
  }

  return (
    <BarChart
      width={750}
      height={350}
      data={daysNames.map((day, index) => {
        return {
          name: day.name,
          shortName: day.shortName,
          data: data[index],
        };
      })}
      margin={{
        right: 50,
        top: 25,
      }}
    >
      <CartesianGrid strokeDasharray='8' />
      <XAxis dataKey='shortName' />
      <YAxis />
      <Tooltip />
      <Bar
        dataKey='data'
        unit={name === 'Calories' ? ' kkal' : ' g'}
        name={name}
        fill='#fda4af'
      />
    </BarChart>
  );
};

export default WeekBarChart;
