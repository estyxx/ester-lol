'use client';

import React, { ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import NextLink from 'next/link';

type LinkProps = {
  title?: string;
  href: string;
  target?: string;
  marginStyle?: 'left' | 'right' | 'both';
  children?: ReactNode;
};
const marginStyles = {
  left: 'ml-4',
  right: 'mr-4',
  both: 'mx-4',
};

export const Link = ({
  title,
  href,
  target,
  marginStyle = 'both',
  children,
}: LinkProps) => {
  const className = marginStyle && marginStyles[marginStyle];
  const pathname = usePathname();
  const isCurrentPath =
    pathname.slice(1) === href || (pathname === '/' && href === 'home');
  return (
    <NextLink
      href={href}
      target={target}
      className={`${className} relative group w-6 text-theme`}
      passHref
    >
      {title}
      {children}
      <span
        className={`h-[1px] inline-block dark:bg-light bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          isCurrentPath ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </NextLink>
  );
};

export const MobileLink = ({
  title,
  href,
  toggle,
  children,
}: {
  title: string;
  href: string;
  toggle: () => void;
  children?: React.ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const isCurrentPath =
    pathname.slice(1) === href || (pathname === '/' && href === 'home');

  const handleOnClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`relative group text-theme-reverse text-lg my-2`}
      onClick={handleOnClick}
    >
      <span className='text-3xl'>{title}</span>
      {children}
      <span
        className={`h-[1px] inline-block  bg-light
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 ${
          isCurrentPath ? 'w-full' : 'w-0'
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};
