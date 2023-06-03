import { FC } from 'react';

import { PieChart, Pie, Cell, Tooltip } from 'recharts';

interface ICarbohydratesPieProps {
  current: number;
  norm: number;
}

const CarbohydratesPie: FC<ICarbohydratesPieProps> = ({ current, norm }) => {
  return (
    <div className='text-center'>
      <span>
        {current >= norm ? 'Carbohydrates done 🎉' : 'Carbohydrates (g)'}
      </span>
      <PieChart width={260} height={260}>
        <Pie
          dataKey='value'
          startAngle={90}
          endAngle={-270}
          data={[
            { name: 'Received (g)', value: current },
            {
              name: 'Remained (g)',
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

export default CarbohydratesPie;
