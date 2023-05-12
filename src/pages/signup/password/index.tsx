import { useForm, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useRouter } from 'next/router';

import Layout from '@/components/Layout';

const validationSchema = z.object({
  password: z.string().nonempty({
    message: 'password is required.',
  }),
  confirmPassword: z.string().nonempty({ message: 'confirm is required.' }),
});

type ValidationSchemaType = z.infer<typeof validationSchema>;

export default function Password() {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    router.push('/signup/personal');
  };

  return (
    <Layout>
      <h1 className='text-center text-3xl font-bold'>Create a password 🔒</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex w-[87%] flex-col gap-8 rounded-2xl border border-[#eaeaea] bg-[#fafafa] px-8 py-5 shadow-sm'
      >
        <div className='block'>
          <label className='text-lg'>Password</label>
          <input
            {...register('password')}
            type='password'
            className={`${
              errors.password ? 'border-pink-400' : 'focus:border-emerald-300'
            } mt-2 w-full rounded border border-[#eaeaea] bg-none p-3`}
            placeholder='secret'
          />
          {errors.password && <p className='mt-3'>{errors.password.message}</p>}
        </div>
        <div className='block'>
          <label className='text-lg'>Confirm password</label>
          <input
            {...register('confirmPassword')}
            type='password'
            className={`${
              errors.password ? 'border-pink-400' : 'focus:border-emerald-300'
            } mt-2 w-full rounded border border-[#eaeaea] bg-none p-3`}
            placeholder='confirm secret'
          />
          {errors.confirmPassword && (
            <p className='mt-3'>{errors.confirmPassword.message}</p>
          )}
        </div>
        <button
          disabled={Object.keys(errors).length > 0}
          type='submit'
          className='w-[100%] rounded bg-emerald-300 p-3 font-medium text-white transition-[background-color] hover:bg-emerald-400 active:bg-emerald-500 disabled:bg-gray-200'
        >
          Next step
        </button>
      </form>
    </Layout>
  );
}
