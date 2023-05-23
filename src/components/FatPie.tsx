import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const fatNorm = 54;

const fat = [
  { name: 'Fat (g)', value: 30 },
  { name: 'Remained (g)', value: fatNorm - 30 },
];

const FatPie = () => {
  return (
    <div className='text-center'>
      <span>{'Fat (g)'}</span>
      <PieChart width={260} height={260}>
        <Pie
          dataKey='value'
          startAngle={90}
          endAngle={-270}
          data={fat}
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

export default FatPie;
