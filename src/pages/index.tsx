import { useState } from 'react';
import toast from 'react-hot-toast';
import { useForm, FieldValues } from 'react-hook-form';

import { useRouter } from 'next/router';

import { signIn } from 'next-auth/react';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import WelcomeLayout from '@/layouts/Welcome';

const signInValidationSchema = z.object({
  username: z.string().nonempty({
    message: 'Username is required.',
  }),
  password: z.string().nonempty({ message: 'Password is required.' }),
});

export default function Welcome() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof signInValidationSchema>>({
    resolver: zodResolver(signInValidationSchema),
  });

  const [hiddenPassword, setHiddenPassword] = useState(true);

  const onSubmit = async (data: FieldValues) => {
    const id = toast.loading('Signing in...');

    const result = await signIn('credentials', {
      username: data.username,
      password: data.password,
      redirect: false,
    });

    if (result?.ok) {
      router.push(`/${data.username}/calories`);

      toast.success('Signed in successfully.', { id });
    } else {
      toast.error('Wrong username or password.', { id });
    }
  };

  return (
    <WelcomeLayout>
      <h1 className='text-center text-3xl font-bold'>Welcome back 🎉</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex w-[87%] flex-col gap-5 rounded-2xl border border-[#eaeaea] bg-[#fafafa] px-8 py-5 shadow-sm'
      >
        <div className='block'>
          <label className='text-lg'>Username</label>
          <input
            {...register('username')}
            spellCheck={false}
            type='text'
            className={`${
              errors.username ? 'border-pink-400' : 'focus:border-emerald-300'
            } mt-2 w-full rounded border border-[#eaeaea] bg-none p-3`}
            placeholder='your username my guy'
          />
          {errors.username && <p className='mt-3'>{errors.username.message}</p>}
        </div>
        <div className='block'>
          <label className='text-lg'>Password</label>
          <div
            className={`${
              errors.password
                ? 'border-pink-400'
                : 'focus-within:border-emerald-300'
            } mt-2 flex rounded border border-[#eaeaea] bg-white`}
          >
            <input
              {...register('password')}
              autoComplete='off'
              type={hiddenPassword ? 'password' : 'text'}
              className='w-[85%] rounded bg-none p-3'
              placeholder='super secret password'
            />
            <div
              onClick={() => setHiddenPassword(!hiddenPassword)}
              className='flex flex-1 cursor-pointer items-center justify-center rounded-r-[0.25rem] transition-[background-color] hover:bg-gray-100'
            >
              <span className='text-[23px]'>
                {hiddenPassword ? '🙈' : '🙉'}
              </span>
            </div>
          </div>
          {errors.password && <p className='mt-3'>{errors.password.message}</p>}
        </div>
        <button
          disabled={Object.keys(errors).length > 0}
          type='submit'
          className='rounded bg-emerald-300 p-3 font-medium text-white transition-[background-color] hover:bg-emerald-400 active:bg-emerald-500 disabled:bg-gray-200'
        >
          Sign in
        </button>
      </form>
    </WelcomeLayout>
  );
}
