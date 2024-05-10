import Image from 'next/image';
import type { Metadata } from 'next';

import { getClient } from '@/lib/client';
import { StyledText } from '@/components/styled-text';
import Skills from '@/components/skills';
import { Heading } from '@/components/heading';
import Timeline from '@/components/experience';
import { AnimatedNumber } from '@/components/animated-number/animated-number';

import { AboutDocument } from '@/types.generated';

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
  const about = data?.data.about;

  const yearsOfExperience = calculateExperience(new Date('May 1, 2016'));

  return (
    <div className='flex-col items-start justify-start  w-full  '>
      <Heading text={about.title} spaceAfter></Heading>

      <div className='grid grid-cols-1  lg:grid-cols-6 3xl:grid-cols-7 gap-8 w-full '>
        <div className='lg:col-span-3 flex flex-col items-start justify-start  '>
          <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
            ABOUT ME
          </h2>
          <StyledText text={about.introduction} classname='my-2' />
        </div>

        <div className='lg:col-span-3  flex justify-center 3xl:hidden'>
          <div className='flex flex-col w-[80%] 3xl:hidden'>
            <div
              className='relative h-max w-full rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light
        dark:bg-dark mb-12 '
            >
              <div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl  bg-dark dark:bg-light  '></div>
              <Image
                className='w-full h-auto rounded-2xl '
                src={about.profilePhoto?.rendition.url}
                alt={about.profilePhoto?.altText}
                priority
                width={about.profilePhoto?.rendition.width}
                height={about.profilePhoto?.rendition.height}
              />
            </div>

            <div className='lg:col-span-2 flex flex-col items-center  justify-start gap-8 3xl:hidden'>
              <AnimatedNumber
                value={yearsOfExperience}
                label={'Years of experience'}
              />
              <AnimatedNumber value={11} label={'Key Technologies'} />
            </div>
          </div>
        </div>
        <div className='hidden 3xl:flex 3xl:col-span-3  justify-center'>
          <div className=' items-center w-[80%]'>
            <div
              className='relative h-max w-full rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light
        dark:bg-dark mb-12  '
            >
              <div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl  bg-dark dark:bg-light  '></div>
              <Image
                className='w-full h-auto rounded-2xl '
                src={about.profilePhoto?.rendition.url}
                alt={about.profilePhoto?.altText}
                priority
                width={about.profilePhoto?.rendition.width}
                height={about.profilePhoto?.rendition.height}
              />
            </div>
          </div>
        </div>
        <div className='hidden 3xl:flex 3xl:col-span-1 flex-col items-center  justify-start gap-8 '>
          <AnimatedNumber
            value={yearsOfExperience}
            label={'Years of experience'}
          />
          <AnimatedNumber value={11} label={'Key Technologies'} />
        </div>
      </div>

      <Skills />

      <Timeline
        items={about?.experiences.map((experience) => experience.experience)}
        title='Experience'
      />
      <Timeline
        items={about?.openSourceContributions.map(
          (contribution) => contribution.openSource,
        )}
        title='Open Source'
      />
      <Timeline
        items={about?.activities.map((activity) => activity.activity)}
        title='Talks'
      />
    </div>
  );
};

export default About;
