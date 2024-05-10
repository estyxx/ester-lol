import Link from 'next/link';
import Image from 'next/image';

import { getClient } from '@/lib/client';
import { StyledText } from '@/components/styled-text';
import { Heading } from '@/components/heading';

import { HomeDocument } from '@/types.generated';

const Home = async () => {
  const {
    data: { home },
  } = await getClient().query({
    query: HomeDocument,
    context: {
      fetchOptions: {
        next: { revalidate: 60 },
      },
    },
  });

  const taglineParts =
    (home?.tagline && home?.tagline.split('|').map((part) => part.trim())) ||
    [];

  return (
    <div className='flex flex-col justify-center items-center w-full text-theme min-h-screen 	'>
      <div className='flex flex-col items-center justify-center w-full text-center md:flex-row md:text-left md:items-center'>
        <div className='w-full md:w-1/2 hidden md:block'>
          <Image
            src={home.image.url}
            alt={home.image.altText}
            priority
            width={home.image.rendition.width}
            height={home.image.rendition.height}
            className='w-full h-auto'
          />
        </div>
        <div className='flex flex-col items-center justify-center w-full md:w-1/2 md:items-start'>
          <Heading
            text={'Ester Beltrami'}
            classname='!text-6xl md:!text-8xl  text-center md:text-left'
          />
          <h2 className='text-xl font-semibold text-dark/75 dark:text-light/75 mt-4 lg:ml-2 font-mono'>
            <h2 className='text-xl font-semibold text-dark/75 dark:text-light/75 mt-4 lg:ml-2 font-mono'>
              {taglineParts.map((part, index) => (
                <span key={index} className='part'>
                  {part}
                  {index < taglineParts.length - 1 && <span> | </span>}
                </span>
              ))}
            </h2>
          </h2>
          <StyledText text={home.introduction} classname='mt-4 lg:ml-2 mb-8' />
          <div className='flex items-center justify-center md:justify-start lg:ml-2'>
            <Link href={home.cta.url} className='btn-primary'>
              {home.cta.text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
