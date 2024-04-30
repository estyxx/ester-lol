import React from 'react';

import { StyledText } from './styled-text';

import { Activity, Education, Experience } from '@/types.generated';

type Item = Experience | Education | Activity;

type ExperienceProps = {
  items: Item[];
  title: string;
};

type DetailsProps = {
  item: Item;
};

const isExperience = (item: Item): item is Experience => {
  return item.__typename === 'Experience';
};

const isEducation = (item: Item): item is Education => {
  return item.__typename === 'Education';
};

const isActivity = (item: Item): item is Activity => {
  return item.__typename === 'Activity';
};

const Details = ({ item }: DetailsProps) => {
  return (
    <li className='my-8 first:mt-0 last:mb-0 sm:w-[80%] mx-auto flex flex-col items-start justify-between text-theme'>
      <div>
        <h3 className='capitalize font-bold text-2xl'>
          {(isExperience(item) && item.jobTitle) ||
            (isEducation(item) && item.degree)}
          &nbsp;
          {isExperience(item) && item.companyWebsite && (
            <a
              href={item.companyWebsite}
              target='_blank'
              className='text-primary capitalize'
            >
              @{item.companyName}
            </a>
          )}
          {isEducation(item) && <span>{item.institutionName}</span>}
        </h3>
        <span className='capitalize font-medium text-dark/75 '>
          {(isExperience(item) && item.timeline) ||
            (isEducation(item) && item.dateRange)}
        </span>
        {isActivity(item) && <h4>{item?.title}</h4>}
        {isExperience(item) && (
          <StyledText text={item.longDescription || item.shortDescription} />
        )}
      </div>
    </li>
  );
};

const Timeline = ({ items, title }: ExperienceProps) => {
  return (
    <div className='my-16 lg:my-32'>
      <h2 className='font-bold text-6xl lg:text-8xl mb-8 lg:mb-32 w-full sm:text-center text-theme'>
        {title}
      </h2>
      <div className='sm:w-[95%] sm:mx-auto relative' id='scroll-container'>
        <div
          className='hidden sm:block absolute left-8 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top
        '
          id='animated-bar'
        />
        <ul className='w-full flex flex-col items-start justify-between sm:ml-4 rever'>
          {items?.map((item, index) => {
            return (
              <Details
                key={`${
                  (isExperience(item) && item.companyName) ||
                  (isEducation(item) && item.institutionName)
                }-${index}`}
                item={item}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
