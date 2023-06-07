import { useRouter } from 'next/router';

export default function NotYou() {
  const router = useRouter();

  return (
    <h1 className='text-3xl font-bold'>{`You aren't signed in as ${router.query.user} 🤔`}</h1>
  );
}
