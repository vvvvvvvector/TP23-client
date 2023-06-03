import { FC } from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import { daysNames } from '@/utils/utils';

interface IWeekBarChartProps {
  data: number[];
}

const WeekBarChart: FC<IWeekBarChartProps> = ({ data }) => {
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
      <Bar dataKey='data' unit=' kkal' name='Calories' fill='#93c5fd' />
    </BarChart>
  );
};

export default WeekBarChart;
