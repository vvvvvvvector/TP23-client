import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  {
    name: 'Monday',
    shortName: 'Mon',
    data: 2400,
  },
  {
    name: 'Tuesday',
    shortName: 'Tues',
    data: 3000,
  },
  {
    name: 'Wednesday',
    shortName: 'Wed',
    data: 2000,
  },
  {
    name: 'Thursday',
    shortName: 'Thurs',
    data: 2780,
  },
  {
    name: 'Friday',
    shortName: 'Fri',
    data: 1890,
  },
  {
    name: 'Saturday',
    shortName: 'Sat',
    data: 2390,
  },
  {
    name: 'Sunday',
    shortName: 'Sun',
    data: 3490,
  },
];

const WeekBarChart = () => {
  return (
    <BarChart
      width={750}
      height={350}
      data={data}
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
