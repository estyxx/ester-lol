import React from 'react';
import Link from 'next/link';

export const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <Link
        href='/'
        className='w-16 h-16 bg-dark text-theme-reverse flex items-center justify-center
        rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light dark:text-light'
      >
        EB
      </Link>
    </div>
  );
};
