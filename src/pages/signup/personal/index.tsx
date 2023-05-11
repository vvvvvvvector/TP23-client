import { useState } from 'react';

import Layout from '@/components/Layout';

const options = ['minimal', 'weak', 'medium', 'high', 'extra activity'];

export default function Personal() {
  const [opened, setOpened] = useState(false);
  const [activity, setActivity] = useState(options[0]);
  const [sex, setSex] = useState<'m' | 'f'>('m');

  return (
    <Layout>
      <h1 className='text-center text-3xl font-bold'>
        Enter your personal information
      </h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='flex w-[87%] flex-col gap-4 rounded-2xl border border-[#eaeaea] bg-[#fafafa] px-8 py-5 shadow-sm'
      >
        <div className='mt-2 flex items-center justify-start gap-5 rounded'>
          <label className='text-lg'>Age:</label>
          <input
            type='number'
            className='box-border w-full max-w-[165px] rounded border border-[#eaeaea] bg-none p-2 focus:border-emerald-300'
            placeholder=''
          />
        </div>
        <div className='mt-2 flex items-center justify-start gap-5 rounded'>
          <span className='text-lg'>Sex:</span>
          <div className='flex gap-3 text-lg'>
            <div className='relative flex items-center justify-center'>
              <input
                className='h-7 w-7 cursor-pointer appearance-none rounded-full border border-[#eaeaea] bg-white checked:cursor-default checked:border-transparent checked:bg-emerald-300'
                type='checkbox'
                checked={sex === 'm'}
                onChange={() => setSex('m')}
              />
              {sex === 'm' && (
                <svg
                  className='absolute'
                  width='13'
                  height='11'
                  viewBox='0 0 13 11'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4.26691 11L0 6.60425L1.9445 4.60103L4.26691 7.00064L11.0555 0L13 2.00322L4.26691 11Z'
                    fill='white'
                  />
                </svg>
              )}
            </div>
            <label className='text-lg'>male</label>
          </div>
          <div className='flex gap-3 text-lg'>
            <div className='relative flex items-center justify-center'>
              <input
                className='h-7 w-7 cursor-pointer appearance-none rounded-full border border-[#eaeaea] bg-white checked:cursor-default checked:border-transparent checked:bg-emerald-300'
                type='checkbox'
                checked={sex === 'f'}
                onChange={() => setSex('f')}
              />
              {sex === 'f' && (
                <svg
                  className='absolute'
                  width='13'
                  height='11'
                  viewBox='0 0 13 11'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4.26691 11L0 6.60425L1.9445 4.60103L4.26691 7.00064L11.0555 0L13 2.00322L4.26691 11Z'
                    fill='white'
                  />
                </svg>
              )}
            </div>
            <label className='text-lg'>female</label>
          </div>
        </div>
        <div className='mt-2 flex items-center justify-start gap-5 rounded'>
          <label className='text-lg'>Weight:</label>
          <input
            type='number'
            className='box-border w-full max-w-[165px] rounded border border-[#eaeaea] bg-none p-2 focus:border-emerald-300'
            placeholder=''
          />
          <label className='text-lg'>kg</label>
        </div>
        <div className='mt-2 flex items-center justify-start gap-5 rounded'>
          <label className='text-lg'>Height:</label>
          <input
            type='number'
            className='box-border w-full max-w-[165px] rounded border border-[#eaeaea] bg-none p-2 focus:border-emerald-300'
            placeholder=''
          />
          <span className='text-lg'>cm</span>
        </div>
        <div className='mt-2 flex flex-row items-center justify-start gap-5 rounded'>
          <span className='text-lg'>Phisical activity:</span>
          <div
            onClick={() => setOpened(!opened)}
            className={`relative w-full max-w-[165px] cursor-pointer rounded border bg-white p-2 ${
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
              <ul className='z-2 absolute right-[0px] top-[46px] w-full rounded shadow-md'>
                {options.map((option, index) => (
                  <li
                    onClick={() => setActivity(option)}
                    className='cursor-pointer bg-neutral-100 p-2 hover:bg-neutral-200'
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
      <button className='flex w-[70%] items-center justify-center rounded bg-emerald-300 p-3 font-medium text-white transition-[background-color] hover:bg-emerald-400 active:bg-emerald-500'>
        <span>Create an account</span>
        <span className='ml-3 text-lg'>🚀</span>
      </button>
    </Layout>
  );
}
