import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='flex flex-col items-center justify-between p-24'>
      <h1>Custom 404 page</h1>
      <Link className='text-xl mt-[50px]' href='/'>
        Go back to Home
      </Link>
    </main>
  );
}
