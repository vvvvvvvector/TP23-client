import { useState } from 'react';

import Layout from '@/components/Layout';

const options = ['minimal', 'weak', 'medium', 'high', 'extra activity'];

export default function Personal() {
  const [opened, setOpened] = useState(false);
  const [activity, setActivity] = useState(options[0]);
  const [sex, setSex] = useState<'m' | 'f'>('m');

  return (
    <Layout>
      <h1 className='font-bold text-3xl text-center'>
        Enter your personal information
      </h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-[85%] shadow-sm flex flex-col gap-5 bg-[#fafafa] py-7 px-10 rounded-2xl border border-[#eaeaea]'
      >
        <div className='flex items-center justify-start gap-5 mt-2 rounded'>
          <label htmlFor='age' className='text-lg'>
            Age:
          </label>
          <input
            name='age'
            type='number'
            className='w-[165px] box-border p-2 bg-none focus:border-emerald-300 rounded border border-[#eaeaea]'
            placeholder=''
          />
        </div>
        <div className='flex items-center justify-start gap-5 mt-2 rounded'>
          <label htmlFor='sex' className='text-lg'>
            Sex:
          </label>
          <div className='flex gap-3 text-lg'>
            <input
              name='male'
              type='checkbox'
              checked={sex === 'm'}
              onChange={() => setSex('m')}
            />
            <label htmlFor='male'>male</label>
          </div>
          <div className='flex gap-3 text-lg'>
            <input
              name='female'
              type='checkbox'
              checked={sex === 'f'}
              onChange={() => setSex('f')}
              className=''
            />
            <label htmlFor='female'>female</label>
          </div>
        </div>
        <div className='flex items-center justify-start gap-5 mt-2 rounded'>
          <label htmlFor='weight' className='text-lg'>
            Weight:
          </label>
          <input
            name='weight'
            type='number'
            className='w-[165px] box-border p-2 bg-none focus:border-emerald-300 rounded border border-[#eaeaea]'
            placeholder=''
          />
          <label className='text-lg'>kg</label>
        </div>
        <div className='flex items-center justify-start gap-5 mt-2 rounded'>
          <label htmlFor='height' className='text-lg'>
            Height:
          </label>
          <input
            name='height'
            type='number'
            className='w-[165px] box-border p-2 bg-none focus:border-emerald-300 rounded border border-[#eaeaea]'
            placeholder=''
          />
          <span className='text-lg'>cm</span>
        </div>
        <div className='flex flex-row items-center justify-start gap-5 mt-2 rounded'>
          <span className='text-lg'>Phisical activity:</span>
          <div
            onClick={() => setOpened(!opened)}
            className={`cursor-pointer relative w-[165px] p-2 rounded border bg-white ${
              opened ? 'border-emerald-300' : 'border-[#eaeaea]'
            }`}
          >
            <button className='flex w-full justify-between'>
              <span>{activity}</span>
              <svg
                className={`relative top-[8px] ${
                  opened ? 'rotate-180' : ''
                } transition-transform duration-300`}
                width='12'
                height='9'
                viewBox='0 0 12 9'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.41 0.790039L6 5.38004L10.59 0.790039L12 2.21004L6 8.21004L0 2.21004L1.41 0.790039Z'
                  fill='#28282B'
                />
              </svg>
            </button>
            {opened && (
              <ul className='z-2 absolute shadow-md top-[46px] right-[0px] w-full rounded'>
                {options.map((option, index) => (
                  <li
                    onClick={() => setActivity(option)}
                    className='bg-neutral-100 hover:bg-neutral-200 p-2 cursor-pointer'
                    key={index}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </form>
      <button className='w-[70%] flex items-center justify-center font-medium bg-emerald-300 hover:bg-emerald-400 active:bg-emerald-500 transition-[background-color] text-white rounded p-3'>
        <span>Create an account</span>
        <span className='text-lg ml-3'>🚀</span>
      </button>
    </Layout>
  );
}
