import { FC } from 'react';
import toast from 'react-hot-toast';

import { useRouter } from 'next/router';

import { useForm, FieldValues } from 'react-hook-form';

interface AddDailyProps {
  setAddDaily: (openOverlay: boolean) => void;
  token: string;
}

const AddDaily: FC<AddDailyProps> = ({ setAddDaily, token }) => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const id = toast.loading('Adding elements...');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/calories`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          calories: +data.calories,
          protein: +data.protein,
          fat: +data.fat,
          carbohydrates: +data.carbohydrates,
        }),
      });

      const json = await res.json();

      if (json.message === 'Element added') {
        toast.success('Added successfully.', { id });

        router.replace(router.asPath);

        setAddDaily(false);
      }
    } catch (error) {
      toast.error('Something went wrong.', { id });
    }
  };

  return (
    <div className='relative grid h-full w-full place-items-center'>
      <button
        onClick={() => setAddDaily(false)}
        className='absolute left-10 top-10 text-lg text-neutral-400 transition-[color] hover:text-neutral-500'
      >
        {'<   Go back'}
      </button>
      <div className='flex flex-col items-center gap-5'>
        <h1 className='text-center text-3xl font-bold'>
          Info about what You just have eaten 😋
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex w-full max-w-[450px] flex-col gap-8 rounded-2xl border border-[#eaeaea] bg-[#fafafa] px-8 py-5 shadow-sm'
        >
          <div className='block'>
            <div className='mt-2 flex items-center justify-between gap-5 rounded'>
              <label className='text-lg'>Calories (kkal):</label>
              <input
                {...register('calories', {
                  required: true,
                })}
                min={0}
                type='number'
                className={`${
                  errors.calories
                    ? 'border-pink-400'
                    : 'focus:border-emerald-300'
                } box-border w-full max-w-[180px] rounded border border-[#eaeaea] bg-none p-2 `}
                placeholder=''
              />
            </div>
          </div>
          <div className='block'>
            <div className='mt-2 flex items-center justify-between gap-5 rounded'>
              <label className='text-lg'>Protein (g):</label>
              <input
                {...register('protein', {
                  required: true,
                })}
                min={0}
                type='number'
                className={`${
                  errors.protein
                    ? 'border-pink-400'
                    : 'focus:border-emerald-300'
                } box-border w-full max-w-[180px] rounded border border-[#eaeaea] bg-none p-2 `}
                placeholder=''
              />
            </div>
          </div>
          <div className='block'>
            <div className='mt-2 flex items-center justify-between gap-5 rounded'>
              <label className='text-lg'>Fat (g):</label>
              <input
                {...register('fat', {
                  required: true,
                })}
                min={0}
                type='number'
                className={`${
                  errors.fat ? 'border-pink-400' : 'focus:border-emerald-300'
                } box-border w-full max-w-[180px] rounded border border-[#eaeaea] bg-none p-2 `}
                placeholder=''
              />
            </div>
          </div>
          <div className='block'>
            <div className='mt-2 flex items-center justify-between gap-5 rounded'>
              <label className='text-lg'>Carbohydrates (g):</label>
              <input
                {...register('carbohydrates', {
                  required: true,
                })}
                min={0}
                type='number'
                className={`${
                  errors.carbohydrates
                    ? 'border-pink-400'
                    : 'focus:border-emerald-300'
                } box-border w-full max-w-[180px] rounded border border-[#eaeaea] bg-none p-2 `}
                placeholder=''
              />
            </div>
          </div>
          <button
            type='submit'
            className='flex w-[100%] items-center justify-center rounded bg-green-300 p-3 font-medium text-white transition-[background-color] hover:bg-green-400 active:bg-green-500 disabled:bg-gray-200'
          >
            <span>Add stats</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDaily;
