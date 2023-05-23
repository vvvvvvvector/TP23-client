import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const carbohydratesCurrent = 40;
const carbohydratesNorm = 140;

const carbohydrates = [
  { name: 'Received (g)', value: carbohydratesCurrent },
  { name: 'Remained (g)', value: carbohydratesNorm - carbohydratesCurrent },
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
          animationDuration={1000}
          innerRadius={60}
          outerRadius={80}
          fill='#8884d8'
          label
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
