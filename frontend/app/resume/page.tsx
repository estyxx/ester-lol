import Image from 'next/image';

import { getClient } from '@/lib/client';
import { StyledText } from '@/components/styled-text';
import {
  MailIcon,
  DownloadIcon,
  LinkedInOutlineIcon,
  GithubIcon,
} from '@/components/icons';
import { Heading } from '@/components/heading';

import { ResumeDocument } from '@/types.generated';

const Resume = async () => {
  const data = await getClient().query({ query: ResumeDocument });
  const resume = data?.data?.resume;

  return (
    <div
      className='flex-col items-start justify-start  border-solid border-black md:shadow-2xl w-full
    print:shadow-0 print:shadow-transparent shadow-black print:p-0 md:p-12 rounded-lg print:mb-0 mb-12 text-theme
    lg:max-w-screen-xl'
    >
      <div className='relative mb-4 md:mb-12 print:mb-0'>
        <div className='absolute -top-5 -left-5 sm:-top-10 sm:-left-10  bg-yellow-400 dark:bg-primary  h-[8rem] w-[8rem] -z-10 rounded-full '></div>
        <div className='flex flex-row items-start justify-between  '>
          <div className='grid grid-cols-1 md:grid-cols-9 print:col-span-9 w-full'>
            <div className='col-span-1 md:col-span-9 print:col-span-9 flex justify-between items-center'>
              <Heading
                text={'Ester Beltrami'}
                classname='!text-5xl print:!text-xl'
              ></Heading>

              <button
                className=' flex items-center justify-center
               print:hidden p-2 rounded-lg border-2 border-solid
                border-dark hover:border-dark bg-dark hover:bg-light hover:text-dark text-light md:mb-2
dark:border-light dark:hover:border-light dark:bg-light dark:hover:bg-dark dark:text-dark dark:hover:text-light
                '
              >
                <a href='/api/generate-pdf' target='_blank'>
                  <DownloadIcon className='' />
                </a>
              </button>
            </div>

            <div className='col-span-1 md:col-span-2 print:col-span-2'>
              <h2 className='text-xl'>{resume.subtitle}</h2>
            </div>

            <div className='col-span-1 md:col-span-7 print:col-span-7 flex flex-col space-y-2 md:ml-4 border-t-2 border-dark dark:border-light/30 '>
              <div className='flex flex-col md:flex-wrap md:flex-row md:items-center print:flex-row  '>
                <div className='flex items-center mb-0 '>
                  <MailIcon className='mr-2 w-5 h-5 m-1 ' />
                  <span className='print:text-xs'>
                    beltrami.ester@gmail.com
                  </span>
                </div>
                <div className='flex items-center mb-0 '>
                  <LinkedInOutlineIcon className='ml-1 mr-2 ' />
                  <span className='print:text-xs'>
                    linkedin.com/in/beltramiester
                  </span>
                </div>
                <div className='flex items-center mb-0'>
                  <GithubIcon className='mr-2 !w-5 !h-5 sm:w-5 m-1' />
                  <span className='print:text-xs'>github.com/estyxx</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-9 print:col-span-9 print:grid-cols-9 mb-8 print:mb-0'>
        <h3 className='md:col-span-2 print:col-span-2 relative font-bold text-xl '>
          Profile
          <div className='absolute top-1/3 left-0 bg-yellow-300 dark:bg-primary w-full h-2 -z-10  '></div>
        </h3>
        <div className='md:col-span-7 print:col-span-7'></div>

        <div className='md:col-span-2 print:col-span-2 flex items-center justify-center my-4 '>
          <Image
            className='w-[70%] h-auto rounded-full'
            src={resume.profilePhoto?.rendition.url}
            alt={resume.profilePhoto?.altText}
            priority
            width={resume.profilePhoto?.rendition.width}
            height={resume.profilePhoto?.rendition.height}
          />
        </div>
        <div className='md:col-span-7 print:col-span-7 md:ml-4 text-center print:text-left md:text-left'>
          <StyledText text={resume.introduction} />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-9 print:grid-cols-9'>
        <h3 className='md:col-span-2 print:col-span-2  relative font-bold text-xl mb-2'>
          Work Experience
          <div className='absolute top-1/3 left-0 bg-yellow-300 dark:bg-primary w-full h-2 -z-10  '></div>
        </h3>
        <div className='md:col-span-7 print:col-span-7 md:ml-4 '></div>

        <div className='col-span-1 md:col-span-2 print:col-span-2  border-t-2 border-dark dark:border-light mb-4 print:my-0 '></div>
        <div className=' md:col-span-7 print:col-span-7 md:border-t-2  md:border-yellow-300 dark:border-primary mb-4 print:my-0'></div>

        {resume.experiences.map((item, index) => {
          const experience = item.experience;
          return (
            <>
              <div
                key={index}
                className='md:col-span-2 print:col-span-2  flex flex-col items-center justify-start mb-8'
              >
                <p className='inline-block w-full text-theme font-bold text-lg '>
                  {experience.companyName}
                </p>

                <p className='inline-block w-full text-dark/75 dark:text-light/65 text-base '>
                  {experience.timeline}
                </p>
              </div>

              <div className='md:col-span-7 print:col-span-7  md:ml-4 mb-8'>
                <StyledText text={experience.shortDescription} />
              </div>
            </>
          );
        })}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-9 print:grid-cols-9'>
        <div className='md:col-span-2 print:col-span-2  relative font-bold text-xl text-theme mb-2'>
          Open Source
          <div className='absolute top-1/3 left-0 bg-yellow-300 dark:bg-primary w-full h-2 -z-10  '></div>
        </div>
        <div className='md:col-span-7 print:col-span-7 md:ml-4'></div>

        <div className='col-span-1 md:col-span-2 print:col-span-2  border-t-2 border-dark dark:border-light mb-4 print:my-0'></div>
        <div className=' md:col-span-7 print:col-span-7 md:border-t-2  md:border-yellow-300 dark:border-primary mb-4 print:my-0'></div>

        {resume.openSourceContributions.map((item, index) => {
          const experience = item.openSource;
          return (
            <>
              <div
                key={index}
                className='md:col-span-2 print:col-span-2  flex flex-col items-center justify-start mb-8'
              >
                <p className='inline-block w-full text-theme font-bold text-lg '>
                  {experience.companyName}
                </p>

                <p className='inline-block w-full text-dark/75 dark:text-light/65 text-base '>
                  {experience.timeline}
                </p>
              </div>

              <div className='md:col-span-7 print:col-span-7 md:ml-4 mb-8'>
                <StyledText text={experience.shortDescription} />
              </div>
            </>
          );
        })}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-9 print:grid-cols-9'>
        <div className='md:col-span-2 print:col-span-2  relative font-bold text-xl mb-2'>
          Activity
          <div className='absolute top-1/3 left-0 bg-yellow-300 dark:bg-primary w-full h-2 -z-10  '></div>
        </div>
        <div className='md:col-span-7 print:col-span-7 md:ml-4'></div>

        <div className='col-span-1 md:col-span-2 print:col-span-2  border-t-2 border-dark dark:border-light mb-4 print:my-0'></div>
        <div className=' md:col-span-7 print:col-span-7 md:border-t-2  md:border-yellow-300 dark:border-primary mb-4 print:my-0'></div>

        {resume.activities.map((item, index) => {
          const activity = item.activity;
          return (
            <>
              <div
                key={index}
                className='md:col-span-2 print:col-span-2  flex flex-col items-center justify-start mb-8'
              >
                <p className='inline-block w-full text-dark/75 dark:text-light/65 text-base capitalize '>
                  {activity.dateRange}
                </p>
              </div>

              <div className='md:col-span-7 print:col-span-7 md:ml-4 mb-8'>
                <div className='inline-block w-full text-theme font-bold text-xl print:text-md '>
                  {activity.title}
                </div>
                <StyledText text={activity.shortDescription} />
              </div>
            </>
          );
        })}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-9 print:grid-cols-9'>
        <div className='md:col-span-2 print:col-span-2  relative font-bold text-xl mb-2'>
          Education
          <div className='absolute top-1/3 left-0 bg-yellow-300 dark:bg-primary w-full h-2 -z-10  '></div>
        </div>
        <div className='md:col-span-7 print:col-span-7 md:ml-4'></div>

        <div className='col-span-1 md:col-span-2 print:col-span-2  border-t-2 border-dark dark:border-light mb-4 print:my-0'></div>
        <div className=' md:col-span-7 print:col-span-7 md:border-t-2  md:border-yellow-300 dark:border-primary mb-4 print:my-0'></div>

        {resume.educations.map((item, index) => {
          const education = item.education;
          return (
            <>
              <div
                key={index}
                className='md:col-span-2 print:col-span-2  flex flex-col items-center justify-start mb-8'
              >
                <p className='inline-block w-full text-dark/75 dark:text-light/65 text-base capitalize '>
                  {education.dateRange}
                </p>
              </div>

              <div className='md:col-span-7 print:col-span-7 md:ml-4 mb-8'>
                <p className='inline-block w-full text-theme font-bold text-xl '>
                  {education.institutionName}
                </p>
                <p>{education.degree}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
