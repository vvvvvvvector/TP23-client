import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const proteinNorm = 60;

const protein = [
  { name: 'Protein (g)', value: 6 },
  { name: 'Remained (g)', value: proteinNorm - 6 },
];

const ProteinPie = () => {
  return (
    <div className='text-center'>
      <span>Protein</span>
      <PieChart width={260} height={260}>
        <Pie
          dataKey='value'
          startAngle={90}
          endAngle={-270}
          data={protein}
          cx='50%'
          cy='50%'
          outerRadius={80}
          fill='#8884d8'
          label
        >
          <Cell fill='#86efac' />
          <Cell fill='#bfdbfe' />
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default ProteinPie;
