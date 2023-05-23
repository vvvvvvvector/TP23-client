import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const carbohydratesNorm = 140;

const carbohydrates = [
  { name: 'Carbohydrates (g)', value: 40 },
  { name: 'Remained (g)', value: carbohydratesNorm - 40 },
];

const CarbohydratesPie = () => {
  return (
    <div className='text-center'>
      <span>{'Carbohydrates (g)'}</span>
      <PieChart width={260} height={260}>
        <Pie
          dataKey='value'
          startAngle={90}
          endAngle={-270}
          data={carbohydrates}
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

export default CarbohydratesPie;
