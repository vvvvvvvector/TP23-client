import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { GetServerSideProps } from 'next';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

import HomeLayout from '@/layouts/Home';
import { DeleteSvg, PlusSvg, QrSvg, SearchSvg } from '@/assets/svgs';
import AddProduct from '@/components/AddProduct';
import { FridgeProductsType } from '@/types/shared';

export default function Fridge() {
  const [addProduct, setAddProduct] = useState(false);
  const [search, setSearch] = useState('');

  const [data, setData] = useState<FridgeProductsType>([
    {
      id: 1,
      name: 'Milk',
      location: 'Fridge',
      expires: '10.10.2023',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Chocolate',
      location: 'Kitchen',
      expires: '11.10.2023',
      quantity: 2,
    },
    {
      id: 3,
      name: 'Bread',
      location: 'Table',
      expires: '12.10.2023',
      quantity: 3,
    },
    {
      id: 4,
      name: 'Eags',
      location: 'Fridge',
      expires: '13.10.2023',
      quantity: 10,
    },
    {
      id: 5,
      name: 'Coca-cola',
      location: 'Fridge',
      expires: '14.10.2023',
      quantity: 1,
    },
    {
      id: 6,
      name: 'Kabanos',
      location: 'Fridge',
      expires: '14.10.2023',
      quantity: 2,
    },
    {
      id: 7,
      name: 'Bananas',
      location: 'Fridge',
      expires: '13.10.2023',
      quantity: 3,
    },
    {
      id: 8,
      name: 'Kiwi',
      location: 'Table',
      expires: '14.10.2023',
      quantity: 5,
    },
    {
      id: 9,
      name: 'Apple',
      location: 'Table',
      expires: '21.10.2023',
      quantity: 8,
    },
    {
      id: 10,
      name: 'Sausage',
      location: 'Table',
      expires: '20.10.2023',
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
                <span className='mr-4 cursor-pointer'>{`[${item.quantity}]`}</span>
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
      <div className='text-center text-xl font-bold'>{`No ${search} in Your fridge :<`}</div>
    );
  };

  return (
    <HomeLayout>
      {addProduct ? (
        <AddProduct setAddProduct={setAddProduct} setData={setData} />
      ) : (
        <>
          <div className='mt-[20px] flex justify-between px-10'>
            <div className='mb-[5px] flex w-full max-w-[370px] items-center justify-between rounded-lg border border-neutral-200 p-3'>
              <SearchSvg className='scale-[0.75] transform' />
              <input
                onChange={(e) => setSearch(e.target.value)}
                className='w-[300px]'
                type='text'
                placeholder='what do you want to find...'
              />
            </div>
            {!search && data.length !== 0 && (
              <div className='flex items-center justify-center text-lg font-semibold'>
                <span>{`You have ${data.length} ${
                  data.length === 1 ? 'product' : 'products'
                } in total`}</span>
              </div>
            )}
            <div className='flex gap-7'>
              <button className='relative h-14 w-14 rounded-full bg-green-300 p-6 shadow-md transition-[background-color] hover:bg-green-400'>
                <QrSvg className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] scale-[0.75] transform' />
              </button>
              <button
                onClick={() => setAddProduct(true)}
                className='relative h-14 w-14 rounded-full bg-green-300 p-6 shadow-md transition-[background-color] hover:bg-green-400'
              >
                <PlusSvg className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] scale-[0.75] transform' />
              </button>
            </div>
          </div>
          <div className='flex w-full flex-col gap-5 px-10 py-5'>
            {products()}
          </div>
        </>
      )}
    </HomeLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  params,
}) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/refused',
        permanent: false,
      },
    };
  }

  if (session.user.data.username !== params?.user) {
    return {
      redirect: {
        destination: `/${params?.user}/notyou`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
