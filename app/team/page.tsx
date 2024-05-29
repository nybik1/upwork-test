import Image from 'next/image';
import getTeam from '../services/getTeam';

const people = [
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'John Doe',
    title: 'Software Engineer',
    role: 'Developer',
    email: 'johndoe@example.com',
    telephone: '+1-202-555-0180',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Alice Smith',
    title: 'Product Manager',
    role: 'Manager',
    email: 'alicesmith@example.com',
    telephone: '+1-202-555-0190',
    imageUrl:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Bob Johnson',
    title: 'UI Designer',
    role: 'Designer',
    email: 'bobjohnson@example.com',
    telephone: '+1-202-555-0200',
    imageUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Eva Martinez',
    title: 'Marketing Specialist',
    role: 'Marketing',
    email: 'evamartinez@example.com',
    telephone: '+1-202-555-0210',
    imageUrl:
      'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Michael Johnson',
    title: 'Sales Representative',
    role: 'Sales',
    email: 'michaeljohnson@example.com',
    telephone: '+1-202-555-0220',
    imageUrl:
      'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Sarah Johnson',
    title: 'Frontend Developer',
    role: 'Developer',
    email: 'sarahjohnson@example.com',
    telephone: '+1-202-555-0230',
    imageUrl:
      'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'David Smith',
    title: 'Backend Developer',
    role: 'Developer',
    email: 'davidsmith@example.com',
    telephone: '+1-202-555-0240',
    imageUrl:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Emily Davis',
    title: 'UX Designer',
    role: 'Designer',
    email: 'emilydavis@example.com',
    telephone: '+1-202-555-0250',
    imageUrl:
      'https://images.unsplash.com/photo-1560807707-9eaa9e746aa5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Daniel Wilson',
    title: 'Product Owner',
    role: 'Manager',
    email: 'danielwilson@example.com',
    telephone: '+1-202-555-0260',
    imageUrl:
      'https://images.unsplash.com/photo-1473830394358-91588751b241?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Olivia Thompson',
    title: 'Data Analyst',
    role: 'Analyst',
    email: 'oliviathompson@example.com',
    telephone: '+1-202-555-0270',
    imageUrl:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Matthew Brown',
    title: 'Quality Assurance Engineer',
    role: 'Tester',
    email: 'matthewbrown@example.com',
    telephone: '+1-202-555-0280',
    imageUrl:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Sophia Wilson',
    title: 'Scrum Master',
    role: 'Manager',
    email: 'sophiawilson@example.com',
    telephone: '+1-202-555-0290',
    imageUrl:
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'James Anderson',
    title: 'DevOps Engineer',
    role: 'Developer',
    email: 'jamesanderson@example.com',
    telephone: '+1-202-555-0300',
    imageUrl:
      'https://images.unsplash.com/photo-1492681290082-e932832941e6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Emma Garcia',
    title: 'Marketing Manager',
    role: 'Marketing',
    email: 'emmagarcia@example.com',
    telephone: '+1-202-555-0310',
    imageUrl:
      'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Alexander Lee',
    title: 'Sales Manager',
    role: 'Sales',
    email: 'alexanderlee@example.com',
    telephone: '+1-202-555-0320',
    imageUrl:
      'https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default async function Catalog() {
  const team = await getTeam();
  console.log({ team });

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-10'>
      <ul
        role='list'
        className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      >
        {!!team.data?.length &&
          team.data.map((person) => (
            <li
              key={person.email}
              className='col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow'
            >
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
          ))}
      </ul>
    </main>
  );
}
