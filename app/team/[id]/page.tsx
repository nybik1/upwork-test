import React from 'react';
import { NextPage } from 'next';
import { notFound } from 'next/navigation';
import getTeamMember from '@/app/services/getTeamMember';
import Image from 'next/image';

const MemberPage: NextPage<{
  params: {
    id: string;
  };
}> = async (props) => {
  const teamMember = await getTeamMember({
    id: props.params.id,
  });

  if (!teamMember.data) {
    return notFound();
  }

  return (
    <div className='flex flex-1 flex-col p-8 bg-white w-[300px] h-[500px] m-auto rounded'>
      <div className='relative mx-auto flex-shrink-0 w-32 h-32'>
        <Image
          className='rounded-full'
          src={teamMember.data.imageUrl}
          alt={teamMember.data.name}
          fill={true}
          objectFit='cover'
          loading='eager'
        />
      </div>
      <h3 className='mt-6 text-sm font-medium text-gray-900 text-center'>
        {teamMember.data.name}
      </h3>
      <dl className='mt-1 flex flex-grow flex-col items-center'>
        <dt className='sr-only'>Title</dt>
        <dd className='text-sm text-gray-500'>{teamMember.data.title}</dd>
        <dt className='sr-only'>Role</dt>
        <dd className='mt-3'>
          <span className='inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>
            {teamMember.data.role}
          </span>
        </dd>
      </dl>
    </div>
  );
};

export default MemberPage;
