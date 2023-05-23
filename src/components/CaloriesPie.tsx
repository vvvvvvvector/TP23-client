import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const caloriesNorm = 1800;

const calories = [
  { name: 'Calories (kkal)', value: 1800 },
  { name: 'Remained (kkal)', value: caloriesNorm - 1200 },
];

const CaloriesPie = () => {
  return (
    <div className='text-center'>
      <span>{'Calories (kkal)'}</span>
      <PieChart width={260} height={260}>
        <Pie
          dataKey='value'
          startAngle={90}
          endAngle={-270}
          data={calories}
          cx='50%'
          cy='50%'
          outerRadius={80}
          fill='#8884d8'
          label
        >
          <Cell fill='#86efac' />
          <Cell fill='#fca5a5' />
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default CaloriesPie;
