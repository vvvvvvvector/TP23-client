import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const fatCurrent = 30;
const fatNorm = 54;

const fat = [
  { name: 'Received (g)', value: fatCurrent },
  { name: 'Remained (g)', value: fatNorm - fatCurrent },
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

export default FatPie;
