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

  return (
    <div className='flex flex-col justify-center items-center w-full text-theme min-h-screen 	'>
      <div className='flex flex-col items-center justify-center w-full text-center md:flex-row md:text-left md:items-center'>
        <div className='w-full md:w-1/2 hidden md:block'>
          <Image
            src={home.image.rendition.url}
            alt={home.image.altText}
            priority
            width={home.image.rendition.width}
            height={home.image.rendition.height}
            className='w-full h-auto'
          />
        </div>
        <div className='flex flex-col items-center justify-center w-full md:w-1/2 md:items-start'>
          <Heading
            text={home.title}
            classname='!text-6xl md:!text-8xl  text-center md:text-left'
          />
          <StyledText text={home.introduction} classname='my-4' />
          <div className='flex items-center justify-center md:justify-start'>
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
