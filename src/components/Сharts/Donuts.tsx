import { useEffect, useState, FC } from 'react';

import Calories from './Donuts/Calories';
import Carbohydrates from './Donuts/Carbohydrates';
import Fat from './Donuts/Fat';
import Protein from './Donuts/Protein';

interface IDonutsProps {
  token: string;
}

const Donuts: FC<IDonutsProps> = ({ token }) => {
  const [data, setData] = useState<{
    current: {
      calories: number;
      carbohydrates: number;
      fat: number;
      protein: number;
    };
    norm: {
      calories: number;
      carbohydrates: number;
      fat: number;
      protein: number;
    };
  } | null>(null);

  useEffect(() => {
    const getData = async () => {
      const responses = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/calories`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/calories/consumption`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);

      const data = await Promise.all(responses.map((res) => res.json()));

      const date = new Date();

      const today = `${String(date.getDate()).padStart(2, '0')}-${String(
        date.getMonth() + 1
      ).padStart(2, '0')}-${date.getFullYear()}`;

      setData({
        current: {
          calories: data[0][today].calories,
          carbohydrates: data[0][today].carbohydrates,
          fat: data[0][today].fat,
          protein: data[0][today].protein,
        },
        norm: {
          calories: data[1].calories,
          carbohydrates: data[1].carbohydrates,
          fat: data[1].fat,
          protein: data[1].protein,
        },
      });
    };

    try {
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!data) {
    return (
      <div className='w-full p-16 text-center text-lg font-medium'>
        Loading...
      </div>
    );
  }

  return (
    <div className='mt-[25px] flex'>
      <Calories current={data.current.calories} norm={data.norm.calories} />
      <Carbohydrates
        current={data.current.carbohydrates}
        norm={data.norm.carbohydrates}
      />
      <Fat current={data.current.fat} norm={data.norm.fat} />
      <Protein current={data.current.protein} norm={data.norm.protein} />
    </div>
  );
};

export default Donuts;
