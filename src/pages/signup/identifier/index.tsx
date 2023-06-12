import { useContext } from 'react';
import { useForm, FieldValues } from 'react-hook-form';

// import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

// import { getToken } from 'next-auth/jwt';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { IndetifierContext } from '@/providers/IdentifierProvider';
import { IndetifierContextStateType } from '@/providers/IdentifierProvider';

import WelcomeLayout from '@/layouts/Welcome';

const identifierValidationSchema = z.object({
  email: z
    .string()
    .nonempty({
      message: 'Email is required.',
    })
    .email({ message: 'Email is not valid.' }),
  username: z
    .string()
    .nonempty({ message: 'Username is required.' })
    .min(5, { message: 'Username must be at least 5 characters long.' })
    .max(19, { message: 'Username is too long.' }),
});

export default function Identifier() {
  const router = useRouter();

  const [identifier, setIdentifier] = useContext(
    IndetifierContext
  ) as IndetifierContextStateType;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof identifierValidationSchema>>({
    resolver: zodResolver(identifierValidationSchema),
  });

  const onSubmit = (data: FieldValues) => {
    setIdentifier({
      email: data.email,
      username: data.username,
    });

    router.push('/signup/password');
  };

  return (
    <WelcomeLayout>
      <h1 className='text-center text-3xl font-bold'>Create your account</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex w-[87%] flex-col gap-5 rounded-2xl border border-[#eaeaea] bg-[#fafafa] px-8 py-5 shadow-sm'
      >
        <div className='block'>
          <label className='text-lg'>Email address</label>
          <input
            {...register('email', {
              onChange(event) {
                setIdentifier({ ...identifier, email: event.target.value });
              },
            })}
            value={identifier?.email}
            spellCheck={false}
            type='text'
            className={`${
              errors.email ? 'border-pink-400' : 'focus:border-emerald-300'
            } mt-2 w-full rounded border border-[#eaeaea] bg-none p-3 `}
            placeholder='example@mail.io'
          />
          {errors.email && <p className='mt-3'>{errors.email.message}</p>}
        </div>
        <div className='block'>
          <label className='text-lg'>Username</label>
          <input
            {...register('username', {
              onChange(event) {
                setIdentifier({ ...identifier, username: event.target.value });
              },
            })}
            value={identifier?.username}
            spellCheck={false}
            type='text'
            className={`${
              errors.username ? 'border-pink-400' : 'focus:border-emerald-300'
            } mt-2 w-full rounded border border-[#eaeaea] bg-none p-3 `}
            placeholder='crazy username'
          />
          {errors.username && <p className='mt-3'>{errors.username.message}</p>}
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

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   const session = (await getToken({ req })) as {
//     data: { username: string };
//   };

//   if (session) {
//     return {
//       redirect: {
//         destination: `/${session.data.username}/calories`,
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };
