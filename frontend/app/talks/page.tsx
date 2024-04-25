import type { Metadata } from 'next';

import { Heading } from '@/components/heading';

export const metadata: Metadata = {
  title: 'Ester Beltrami | Talks',
  description: '',
};

const Talk = () => {
  return <div></div>;
};

const Talks = () => {
  return (
    <div className='mb-16 w-full flex flex-col items-center justify-center'>
      <Heading text={'My Talks'} />
      <div className='grid grid-col-12 gap-24'>
        <div className='col-span-6'></div>
        <div className='col-span-6'></div>
        <div className='col-span-6'></div>
      </div>
    </div>
  );
};

export default Talks;
