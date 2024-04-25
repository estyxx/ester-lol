'use client';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

import { MoonIcon, SunIcon } from '@/components/icons';

export const ThemeToggleButton = ({ classname }: { classname?: string }) => {
  // State to manage the current theme
  const [theme, setTheme] = useState(''); // Start with null to determine the initial theme

  // Effect to set the initial theme based on user preference or system setting
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
    console.log('Initial theme:', initialTheme); // Log initial theme determination
    setTheme(initialTheme);
  }, []);

  // Effect to apply the theme when theme state changes
  useEffect(() => {
    if (theme) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      console.log('Theme applied:', theme); // Log theme application
    }
  }, [theme]);

  // Handler to toggle the theme and store the user's preference
  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log('New theme set:', newTheme); // Log theme change
    setTheme(newTheme);
  };

  console.log(
    'theme dark?',
    theme === 'dark',
    theme === 'dark' ? 'SunIcon' : 'MoonIcon',
  );
  return (
    <button
      onClick={handleToggleTheme}
      className={clsx(`ml-4 ${classname}`, {
        'bg-dark text-light ': theme === 'dark',
        'bg-light text-dark': theme === 'light',
      })}
    >
      {theme === 'dark' ? (
        <SunIcon className='w-6' />
      ) : (
        <MoonIcon className='w-6' />
      )}
    </button>
  );
};
