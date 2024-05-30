import Image from 'next/image';
import getTeam from '../services/getTeam';
import Link from 'next/link';

export default async function Catalog() {
  const team = await getTeam();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-10'>
      {!!team.data?.length ? (
        <ul
          role='list'
          className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        >
          {team.data.map((person) => (
            <Link
              href={{
                pathname: `/team/${person.id}`,
              }}
              key={person.id}
            >
              <li className='col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow'>
                <div className='flex flex-1 flex-col p-8 '>
                  <div className='relative mx-auto flex-shrink-0 w-32 h-32'>
                    <Image
                      className='rounded-full'
                      src={person.imageUrl}
                      alt={person.name}
                      fill={true}
                      objectFit='cover'
                      loading='eager'
                    />
                  </div>
                  <h3 className='mt-6 text-sm font-medium text-gray-900'>
                    {person.name}
                  </h3>
                  <dl className='mt-1 flex flex-grow flex-col justify-between'>
                    <dt className='sr-only'>Title</dt>
                    <dd className='text-sm text-gray-500'>{person.title}</dd>
                    <dt className='sr-only'>Role</dt>
                    <dd className='mt-3'>
                      <span className='inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>
                        {person.role}
                      </span>
                    </dd>
                  </dl>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <span>No data found</span>
      )}
    </main>
  );
}
