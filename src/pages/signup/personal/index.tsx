import { useRef, useEffect, useState, useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useForm, FieldValues } from 'react-hook-form';

import { useRouter } from 'next/router';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { PasswordContext } from '@/providers/PasswordProvider';
import { PasswordContextStateType } from '@/providers/PasswordProvider';

import { IndetifierContext } from '@/providers/IdentifierProvider';
import { IndetifierContextStateType } from '@/providers/IdentifierProvider';

import { PersonalContext } from '@/providers/PersonalProvider';
import { PersonalContextStateType } from '@/providers/PersonalProvider';

import WelcomeLayout from '@/layouts/Welcome';

const options = ['minimal', 'weak', 'medium', 'high', 'extra activity'];

const personalValidationSchema = z.object({
  age: z.string().nonempty({ message: 'Age is required.' }),
  sex: z.string(),
  weight: z.string().nonempty({ message: 'Weight is required.' }),
  height: z.string().nonempty({ message: 'Height is required.' }),
  activity: z.string(),
});

export default function Personal() {
  const router = useRouter();

  const selectRef = useRef<HTMLDivElement>(null);

  const [opened, setOpened] = useState(false);

  const [personal, setPersonal] = useContext(
    PersonalContext
  ) as PersonalContextStateType;

  const [identifier] = useContext(
    IndetifierContext
  ) as IndetifierContextStateType;

  const [password] = useContext(PasswordContext) as PasswordContextStateType;

  const [activity, setActivity] = useState<string>(options[0]);
  const [sex, setSex] = useState<string>('m');

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof personalValidationSchema>>({
    resolver: zodResolver(personalValidationSchema),
  });

  const onSubmit = (data: FieldValues) => {
    const user: {
      email: string;
      username: string;
      password: string;
      age: string;
      sex: string;
      weight: string;
      height: string;
      activity: string;
    } = {
      ...identifier,
      ...{
        password: password.password,
      },
      ...{
        age: personal.age,
        sex: personal.sex,
        weight: personal.weight,
        height: personal.height,
        activity: personal.activity,
      },
    };

    toast.success(<pre>{JSON.stringify(user, null, 2)}</pre>);

    router.push(`/${user.username}/calories`);
  };

  useEffect(() => {
    register('activity', {
      onChange() {
        setPersonal({ ...personal, activity: activity });
      },
    });

    setValue('activity', activity);

    setSex(personal.sex);

    const clickOutside = (e: MouseEvent) => {
      if (selectRef.current && !e.composedPath().includes(selectRef.current)) {
        setOpened(false);
      }
    };

    document.body.addEventListener('click', clickOutside);

    return () => {
      document.body.removeEventListener('click', clickOutside);
    };
  }, []);

  useEffect(() => {
    setPersonal({ ...personal, sex });
  }, [sex]);

  return (
    <WelcomeLayout>
      <h1 className='text-center text-3xl font-bold'>
        Enter your personal information
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex w-[87%] flex-col gap-5 rounded-2xl border border-[#eaeaea] bg-[#fafafa] px-8 py-5 shadow-sm'
      >
        <div className='block'>
          <div className='mt-2 flex items-center justify-start gap-5 rounded'>
            <label className='text-lg'>Age:</label>
            <input
              {...register('age', {
                onChange(event) {
                  setPersonal({ ...personal, age: event.target.value });
                },
              })}
              value={personal?.age}
              min={0}
              type='number'
              className={`${
                errors.age ? 'border-pink-400' : 'focus:border-emerald-300'
              } box-border w-full max-w-[180px] rounded border border-[#eaeaea] bg-none p-2 `}
              placeholder=''
            />
          </div>
        </div>
        <div className='block'>
          <div className='mt-2 flex items-center justify-start gap-5 rounded'>
            <span className='text-lg'>Sex:</span>
            <div className='flex gap-3 text-lg'>
              <div className='relative flex items-center justify-center'>
                <input
                  {...register('sex')}
                  className='h-7 w-7 cursor-pointer appearance-none rounded-full border border-[#eaeaea] bg-white checked:cursor-default checked:border-transparent checked:bg-emerald-300'
                  type='radio'
                  value='m'
                  checked={personal.sex === 'm'}
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
                  {...register('sex')}
                  className='h-7 w-7 cursor-pointer appearance-none rounded-full border border-[#eaeaea] bg-white checked:cursor-default checked:border-transparent checked:bg-emerald-300'
                  type='radio'
                  value='f'
                  checked={personal.sex === 'f'}
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
          {errors.sex && <p className='mt-3'>{errors.sex.message}</p>}
        </div>
        <div className='block'>
          <div className='mt-2 flex items-center justify-start gap-5 rounded'>
            <label className='text-lg'>Weight:</label>
            <input
              {...register('weight', {
                onChange(event) {
                  setPersonal({ ...personal, weight: event.target.value });
                },
              })}
              value={personal.weight}
              min={0}
              type='number'
              className={`${
                errors.weight ? 'border-pink-400' : 'focus:border-emerald-300'
              } box-border w-full max-w-[180px] rounded border border-[#eaeaea] bg-none p-2 `}
              placeholder=''
            />
            <label className='text-lg'>kg</label>
          </div>
        </div>
        <div className='block'>
          <div className='mt-2 flex items-center justify-start gap-5 rounded'>
            <label className='text-lg'>Height:</label>
            <input
              {...register('height', {
                onChange(event) {
                  setPersonal({ ...personal, height: event.target.value });
                },
              })}
              value={personal.height}
              min={0}
              type='number'
              className={`${
                errors.height ? 'border-pink-400' : 'focus:border-emerald-300'
              } box-border w-full max-w-[180px] rounded border border-[#eaeaea] bg-none p-2 `}
              placeholder=''
            />
            <span className='text-lg'>cm</span>
          </div>
        </div>
        <div className='block'>
          <div className='mt-2 flex flex-row items-center justify-start gap-5 rounded'>
            <span className='text-lg'>Phisical activity:</span>
            <div
              ref={selectRef}
              onClick={() => setOpened(!opened)}
              className={`${
                errors.activity && 'border-pink-400'
              } relative w-full max-w-[180px] cursor-pointer rounded border bg-white p-2 ${
                opened ? 'border-emerald-300' : 'border-[#eaeaea]'
              }`}
            >
              <button type='button' className='flex w-full justify-between'>
                <span>{personal ? personal.activity : activity}</span>
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
                      onClick={() => {
                        setValue('activity', option);
                        setActivity(option);
                        setPersonal({ ...personal, activity: option });
                      }}
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
        </div>
        <button
          disabled={Object.keys(errors).length > 0}
          type='submit'
          className='flex w-[100%] items-center justify-center rounded bg-emerald-300 p-3 font-medium text-white transition-[background-color] hover:bg-emerald-400 active:bg-emerald-500 disabled:bg-gray-200'
        >
          <span>Create an account</span>
          <span className='ml-3 text-lg'>🚀</span>
        </button>
      </form>
    </WelcomeLayout>
  );
}
