import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const proteinCurrent = 6;
const proteinNorm = 60;

const protein = [
  { name: 'Received (g)', value: proteinCurrent },
  { name: 'Remained (g)', value: proteinNorm - proteinCurrent },
];

const ProteinPie = () => {
  return (
    <div className='text-center'>
      <span>{'Protein (g)'}</span>
      <PieChart width={260} height={260}>
        <Pie
          dataKey='value'
          startAngle={90}
          endAngle={-270}
          data={protein}
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

export default ProteinPie;
