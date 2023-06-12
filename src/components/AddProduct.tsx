import { Dispatch, FC, SetStateAction } from 'react';
import toast from 'react-hot-toast';

import { AddProductType, FridgeProductsType } from '@/types/shared';

import { useForm, FieldValues } from 'react-hook-form';

interface AddProductProps {
  setAddProduct: (value: boolean) => void;
  setData: Dispatch<SetStateAction<FridgeProductsType>>;
}

const AddProduct: FC<AddProductProps> = ({ setAddProduct, setData }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const id = toast.loading('Adding elements...');

    try {
      const obj: AddProductType = {
        name:
          [...data.name].at(0).toUpperCase() + [...data.name].slice(1).join(''),
        location:
          [...data.location].at(0).toUpperCase() +
          [...data.location].slice(1).join(''),
        expires: data.expires,
        weight: +data.weight,
        quantity: +data.quantity,
      };

      setData((prev) => [...prev, { id: prev.length + 1, ...obj }]);

      toast.success('Added successfully.', { id });

      setAddProduct(false);
    } catch (error) {
      toast.error('Something went wrong.', { id });
    }
  };

  return (
    <div className='relative grid h-full w-full place-items-center'>
      <button
        onClick={() => setAddProduct(false)}
        className='absolute left-10 top-10 text-lg text-neutral-400 transition-[color] hover:text-neutral-500'
      >
        {'<   Go back'}
      </button>
      <div className='flex flex-col items-center gap-5'>
        <h1 className='text-center text-3xl font-bold'>
          Info about about a product 😋
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex w-full max-w-[450px] flex-col gap-8 rounded-2xl border border-[#eaeaea] bg-[#fafafa] px-8 py-5 shadow-sm'
        >
          <div className='block'>
            <div className='mt-2 flex items-center justify-between gap-5 rounded'>
              <label className='text-lg'>Name:</label>
              <input
                {...register('name', {
                  required: true,
                })}
                type='text'
                className={`${
                  errors.name ? 'border-pink-400' : 'focus:border-emerald-300'
                } box-border w-full max-w-[180px] rounded border border-[#eaeaea] bg-none p-2 `}
                placeholder='Coca-Cola'
              />
            </div>
          </div>
          <div className='block'>
            <div className='mt-2 flex items-center justify-between gap-5 rounded'>
              <label className='text-lg'>Location:</label>
              <input
                {...register('location', {
                  required: true,
                })}
                type='text'
                className={`${
                  errors.location
                    ? 'border-pink-400'
                    : 'focus:border-emerald-300'
                } box-border w-full max-w-[180px] rounded border border-[#eaeaea] bg-none p-2 `}
                placeholder='fridge'
              />
            </div>
          </div>
          <div className='flex flex-col gap-7 text-center'>
            <div className='mt-2 flex items-center justify-between gap-5 rounded'>
              <label className='text-lg'>Expire date:</label>
              <input
                {...register('expires', {
                  required: true,
                  pattern:
                    /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/,
                })}
                type='text'
                className={`${
                  errors.expires
                    ? 'border-pink-400'
                    : 'focus:border-emerald-300'
                } box-border w-full max-w-[180px] rounded border border-[#eaeaea] bg-none p-2 `}
                placeholder='dd.mm.yyyy'
              />
            </div>
            {errors.expires && (
              <span className='font-semibold'>
                Wrong date format! Must be dd.mm.yyyy
              </span>
            )}
          </div>
          <div className='block'>
            <div className='mt-2 flex items-center justify-between gap-5 rounded'>
              <label className='text-lg'>Weight (g):</label>
              <input
                {...register('weight', {
                  required: true,
                })}
                type='number'
                min={0}
                step={0.001}
                className={`${
                  errors.weight ? 'border-pink-400' : 'focus:border-emerald-300'
                } box-border w-full max-w-[180px] rounded border border-[#eaeaea] bg-none p-2 `}
                placeholder='55,5'
              />
            </div>
          </div>
          <div className='block'>
            <div className='mt-2 flex items-center justify-between gap-5 rounded'>
              <label className='text-lg'>Quantity:</label>
              <input
                {...register('quantity', {
                  required: true,
                })}
                min={0}
                step={1}
                type='number'
                className={`${
                  errors.quantity
                    ? 'border-pink-400'
                    : 'focus:border-emerald-300'
                } box-border w-full max-w-[180px] rounded border border-[#eaeaea] bg-none p-2 `}
                placeholder='5'
              />
            </div>
          </div>
          <button
            type='submit'
            className='flex w-[100%] items-center justify-center rounded bg-green-300 p-3 font-medium text-white transition-[background-color] hover:bg-green-400 active:bg-green-500 disabled:bg-gray-200'
          >
            <span>Add product</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
