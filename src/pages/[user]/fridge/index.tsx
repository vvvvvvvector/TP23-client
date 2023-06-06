import { useState } from 'react';
import { toast } from 'react-hot-toast';

import HomeLayout from '@/layouts/Home';

import { DeleteSvg, SearchSvg } from '@/assets/svgs';

export default function Fridge() {
  const [search, setSearch] = useState('');

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
    {
      id: 6,
      name: 'Kabanos',
      location: 'Fridge',
      expires: '14/10/2023',
      quantity: 2,
    },
    {
      id: 7,
      name: 'Bananas',
      location: 'Fridge',
      expires: '13/10/2023',
      quantity: 3,
    },
    {
      id: 8,
      name: 'Kiwi',
      location: 'Table',
      expires: '14/10/2023',
      quantity: 5,
    },
    {
      id: 9,
      name: 'Apple',
      location: 'Table',
      expires: '21/10/2023',
      quantity: 8,
    },
    {
      id: 10,
      name: 'Sausage',
      location: 'Table',
      expires: '20/10/2023',
      quantity: 5,
    },
  ]);

  const products = () => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    return filteredData.length > 0 ? (
      filteredData.map((item) => {
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
            <button
              onClick={() => {
                if (
                  window.confirm(
                    `Are you sure you want to delete ${item.name} (${item.quantity})?`
                  )
                ) {
                  setData(data.filter((i) => i.id !== item.id));

                  toast.success('Product was successfully deleted.');
                }
              }}
              className='ml-5'
            >
              <DeleteSvg />
            </button>
          </div>
        );
      })
    ) : (
      <div className='text-center font-bold'>{`No ${search} in Your fridge :<`}</div>
    );
  };

  return (
    <HomeLayout>
      <div className='mt-[20px] flex justify-center'>
        <div className='mb-[5px] flex w-full max-w-[300px] items-center justify-between rounded-lg border border-neutral-200 p-3'>
          <SearchSvg className='scale-[0.65] transform' />
          <input
            onChange={(e) => setSearch(e.target.value)}
            className='w-[237px]'
            type='text'
            placeholder='what do you want to find...'
          />
        </div>
      </div>
      <div className='flex w-full flex-col gap-5 px-10 py-5'>{products()}</div>
    </HomeLayout>
  );
}
