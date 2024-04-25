'use client';
import { useState } from 'react';
import clsx from 'clsx';

import { Logo } from '@/components/logo';
import { Link, MobileLink } from '@/components/link';
import { GithubIcon, LinkedInIcon, TwitterIcon } from '@/components/icons';

import { ThemeToggleButton } from './theme-toggle-button';

import { Pages } from '@/types.generated';

export const Menu = ({
  primaryNavigation,
}: {
  primaryNavigation: Array<Pages>;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Menu Toggle */}
      <button
        onClick={handleOnClick}
        className='flex flex-col z-50 font-medium justify-center items-center lg:hidden'
      >
        <span
          className={clsx(
            'bg-dark dark:bg-light block transition-all duration-300 h-1 w-12 rounded-sm ',
            {
              'rotate-45 translate-y-2 bg-light dark:bg-dark': isOpen,
              '-translate-y-2': !isOpen,
            },
          )}
        ></span>
        <span
          className={clsx(
            `bg-dark dark:bg-light block transition-all duration-300 h-1 w-12 rounded-sm my-1`,
            {
              'opacity-0 ': isOpen,
              'opacity-100': !isOpen,
            },
          )}
        ></span>
        <span
          className={clsx(
            'bg-dark dark:bg-light block transition-all duration-300 h-1 w-12 rounded-sm',
            {
              '-rotate-45 -translate-y-2 bg-light dark:bg-dark': isOpen,
              'translate-y-2': !isOpen,
            },
          )}
        ></span>
      </button>

      {/* Desktop and Mobile Menu */}
      <div className='w-full flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        {/* Mobile Menu */}
        {isOpen && (
          <nav className='fixed inset-0 z-30 flex flex-col items-center justify-center bg-dark/90 dark:bg-light/85 p-4 lg:hidden'>
            {/* Navigation Links */}
            <div className='flex flex-col items-center'>
              {primaryNavigation.map((page: Pages, index: number) => {
                return (
                  <MobileLink
                    key={index}
                    title={page.title}
                    href={page.slug}
                    toggle={handleOnClick}
                  />
                );
              })}

              <div className='flex items-center justify-center flex-wrap mt-2 '>
                <MobileLink href='/tw' target='_blank' marginStyle='right'>
                  <TwitterIcon className='w-6  ' />
                </MobileLink>
                <Link href='/g' target='_blank' marginStyle='both'>
                  <GithubIcon className='w-6 text-light dark:text-dark rounded-full ' />
                </Link>
                <Link href='/link' target='_blank' marginStyle='both'>
                  <LinkedInIcon className='w-6 ' />
                </Link>

                <ThemeToggleButton classname='bg-transparent !text-light dark:text-dark  ' />
              </div>
            </div>
          </nav>
        )}

        {/* Desktop Menu */}
        <nav className='hidden lg:block'>
          {primaryNavigation.map((page: Pages, index: number) => {
            return (
              <Link
                key={index}
                href={page.slug}
                title={page.title}
                marginStyle={index === 0 ? 'right' : 'both'}
              />
            );
          })}
        </nav>

        <div className='hidden  items-center justify-center flex-wrap mt-2 lg:flex '>
          <Link href='/tw' target='_blank' marginStyle='right'>
            <TwitterIcon className='w-6 mr-3 sm:mx-1  ' />
          </Link>
          <Link href='/g' target='_blank' marginStyle='both'>
            <GithubIcon className='w-6 mx-3 sm:mx-1  bg-light rounded-full dark:bg-dark' />
          </Link>
          <Link href='/link' target='_blank' marginStyle='both'>
            <LinkedInIcon className='w-6 mx-3 sm:mx-1  ' />
          </Link>

          <ThemeToggleButton />
        </div>
      </div>

      {/* Logo */}
      <div className='absolute left-[50%] top-2 translate-x-[-50%] hover:scale-150'>
        <Logo />
      </div>
    </>
  );
};
