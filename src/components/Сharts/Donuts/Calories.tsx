import { FC } from 'react';

import { PieChart, Pie, Cell, Tooltip } from 'recharts';

interface ICaloriesPieProps {
  current: number;
  norm: number;
}

const CaloriesPie: FC<ICaloriesPieProps> = ({ current, norm }) => {
  return (
    <div className='text-center'>
      <span>{current >= norm ? 'Calories done 🎉' : 'Calories (kkal)'}</span>
      <PieChart width={260} height={260}>
        <Pie
          dataKey='value'
          startAngle={90}
          endAngle={-270}
          data={[
            { name: 'Received (kkal)', value: current },
            {
              name: 'Remained (kkal)',
              value: current >= norm ? 0 : norm - current,
            },
          ]}
          cx='50%'
          cy='50%'
          animationDuration={1000}
          innerRadius={60}
          outerRadius={80}
          fill='#8884d8'
          label={current >= norm ? false : true}
          labelLine={false}
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
