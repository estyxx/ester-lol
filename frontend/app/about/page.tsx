import Image from 'next/image';
import type { Metadata } from 'next';

import { getClient } from '@/lib/client';
import { StyledText } from '@/components/styled-text';
import Skills from '@/components/skills';
import { Heading } from '@/components/heading';
import Timeline from '@/components/experience';
import { AnimatedNumber } from '@/components/animated-number/animated-number';

import { AboutDocument } from './about.generated';

export const metadata: Metadata = {
  title: 'Ester Beltrami | About',
  description: 'This is about me',
};

function calculateExperience(startDate: Date): number {
  const currentDate = new Date();
  const yearsDifference = currentDate.getFullYear() - startDate.getFullYear();
  const monthDifference = currentDate.getMonth() - startDate.getMonth();

  // Adjust the year difference if the current month is before the start month
  // or if it's the same month but the current day is before the start day
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && currentDate.getDate() < startDate.getDate())
  ) {
    return yearsDifference - 1;
  } else {
    return yearsDifference;
  }
}

const About = async () => {
  const client = await getClient();
  const data = await client.query({ query: AboutDocument });
  const about = data?.data.page;

  const yearsOfExperience = calculateExperience(new Date('May 1, 2016'));

  return (
    <div className='flex-col items-start justify-start  w-full  '>
      <Heading text={about.title} spaceAfter></Heading>

      <div className='grid grid-cols-1 gap-8 lg:grid-cols-8 lg:gap-16  w-full '>
        <div className='lg:col-span-3 flex flex-col items-start justify-start  '>
          <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
            ABOUT ME
          </h2>
          <StyledText text={about.introduction} classname='my-2' />
        </div>

        <div className='lg:col-span-3 flex justify-center'>
          <div
            className='relative h-max w-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light
        dark:bg-dark  '
          >
            <div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl  bg-dark dark:bg-light  '></div>
            <Image
              src={about.profilePhoto.url}
              alt='Me'
              className='w-max h-auto rounded-2xl '
              width={about.profilePhoto.width}
              height={about.profilePhoto.height}
            />
          </div>
        </div>
        <div className='lg:col-span-2 flex flex-col items-center  justify-start gap-8 '>
          <AnimatedNumber
            value={yearsOfExperience}
            label={'Years of experience'}
          />
          <AnimatedNumber value={11} label={'Key Technologies'} />
        </div>
      </div>

      <Skills />

      <Timeline items={about?.experiences} title='Experience' />
      <Timeline items={about?.openSourceContributions} title='Open Source' />
      <Timeline items={about?.activities} title='Activity' />
    </div>
  );
};

export default About;
