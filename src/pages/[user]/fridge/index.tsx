import { useState } from 'react';

import HomeLayout from '@/layouts/Home';
import { DeleteSvg, SearchSvg } from '@/assets/svgs';

export default function Fridge() {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Milk',
      location: 'Fridge',
      expires: '10/10/2023',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Chocolate',
      location: 'Kitchen',
      expires: '11/10/2023',
      quantity: 2,
    },
    {
      id: 3,
      name: 'Bread',
      location: 'Table',
      expires: '12/10/2023',
      quantity: 3,
    },
    {
      id: 4,
      name: 'Eags',
      location: 'Fridge',
      expires: '13/10/2023',
      quantity: 10,
    },
    {
      id: 5,
      name: 'Coca-cola',
      location: 'Fridge',
      expires: '14/10/2023',
      quantity: 1,
    },
  ]);

  return (
    <HomeLayout>
      <div className='mt-[20px] flex justify-center'>
        <div className='mb-[10px] flex w-full max-w-[300px] items-center justify-between rounded-lg border border-neutral-200 p-3'>
          <SearchSvg className='scale-[0.65] transform' />
          <input
            className='w-[237px]'
            type='text'
            placeholder='what do you want...'
          />
        </div>
      </div>
      <div className='flex h-full w-full flex-col gap-5 px-10 py-5'>
        {data.map((item) => {
          return (
            <div key={item.id} className='flex justify-between'>
              <div className='flex w-full transform justify-between rounded-lg border-b-[3px] border-neutral-300 bg-neutral-100 px-5 py-2 text-lg transition-[transform] hover:scale-[1.02]'>
                <div>
                  <span className='mr-4 cursor-pointer'>{`(${item.quantity})`}</span>
                  <span className='cursor-pointer'>{item.name}</span>
                </div>
                <div className='flex w-[55%] justify-between'>
                  <span className='cursor-pointer'>{item.location}</span>
                  <span className='cursor-pointer'>{item.expires}</span>
                </div>
              </div>
              <button className='ml-5'>
                <DeleteSvg />
              </button>
            </div>
          );
        })}
      </div>
    </HomeLayout>
  );
}
