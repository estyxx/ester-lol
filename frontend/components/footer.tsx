import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='print:hidden w-full py-8  border-t-2 border-solid border-dark text-lg px-responsive flex flex-col sm:flex-row items-center justify-between text-theme dark:border-light'>
      <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
      <div className='flex items-center'>
        Build with <span className='text-primary text-2xl px-1'>&#129505;</span>
        by&nbsp;
        <Link href='/' className='underline underline-offset-2'>
          me
        </Link>
      </div>

      <Link href='/' className='underline underline-offset-2'>
        Say Hello
      </Link>
    </footer>
  );
};
