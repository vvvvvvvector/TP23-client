import { useForm, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useRouter } from 'next/router';

import { useContext } from 'react';
import { PasswordContext } from '@/providers/PasswordProvider';
import { PasswordContextStateType } from '@/providers/PasswordProvider';

import WelcomeLayout from '@/layouts/Welcome';

const passwordValidationSchema = z
  .object({
    password: z
      .string()
      .nonempty({
        message: 'Password is required.',
      })
      .regex(new RegExp('^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{8,}$'), {
        message: 'Minimum 8 characters, at least 1 letter and 1 number',
      }),
    confirm: z.string().nonempty({ message: 'Confirm is required.' }),
  })
  .refine((data) => data.password === data.confirm, {
    path: ['confirm'],
    message: "Passwords don't match.",
  });

export default function Password() {
  const router = useRouter();

  const [password, setPassword] = useContext(
    PasswordContext
  ) as PasswordContextStateType;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof passwordValidationSchema>>({
    resolver: zodResolver(passwordValidationSchema),
  });

  const onSubmit = (data: FieldValues) => {
    setPassword({
      password: data.password,
      confirm: data.password,
    });

    router.push('/signup/personal');
  };

  return (
    <WelcomeLayout>
      <h1 className='text-center text-3xl font-bold'>Create a password 🔒</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex w-[87%] flex-col gap-5 rounded-2xl border border-[#eaeaea] bg-[#fafafa] px-8 py-5 shadow-sm'
      >
        <div className='block'>
          <label className='text-lg'>Password</label>
          <input
            {...register('password', {
              onChange(event) {
                setPassword({ ...password, password: event.target.value });
              },
            })}
            autoComplete='off'
            type='password'
            value={password?.password}
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
            {...register('confirm', {
              onChange(event) {
                setPassword({ ...password, confirm: event.target.value });
              },
            })}
            autoComplete='off'
            value={password?.confirm}
            type='password'
            className={`${
              errors.password ? 'border-pink-400' : 'focus:border-emerald-300'
            } mt-2 w-full rounded border border-[#eaeaea] bg-none p-3`}
            placeholder='confirm secret'
          />
          {errors.confirm && <p className='mt-3'>{errors.confirm.message}</p>}
        </div>
        <button
          disabled={Object.keys(errors).length > 0}
          type='submit'
          className='w-[100%] rounded bg-emerald-300 p-3 font-medium text-white transition-[background-color] hover:bg-emerald-400 active:bg-emerald-500 disabled:bg-gray-200'
        >
          Next step
        </button>
      </form>
    </WelcomeLayout>
  );
}
