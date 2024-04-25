import React from 'react';

import {
  Activity,
  Education,
  Experience,
  PageActivity,
  PageEducation,
  PageExperience,
  PageOpenSourceContribution,
} from '../types.generated';
import { StyledText } from './styled-text';

type DetailsProps = {
  item: Experience | Activity | Education;
};
const Details = ({ item }: DetailsProps) => {
  return (
    <li className='my-8 first:mt-0 last:mb-0 sm:w-[80%] mx-auto flex flex-col items-start justify-between text-theme'>
      <div>
        <h3 className='capitalize font-bold text-2xl'>
          {item.jobTitle || item.degree} &nbsp;
          {item.companyWebsite && (
            <a
              href={item.companyWebsite}
              target='_blank'
              className='text-primary capitalize'
            >
              @{item.companyName || item.institutionName}
            </a>
          )}
        </h3>
        <span className='capitalize font-medium text-dark/75 '>
          {item.timeline || item.dateRange}
        </span>
        {item?.title && <h4>{item?.title}</h4>}
        <StyledText text={item.longDescription || item.shortDescription} />
      </div>
    </li>
  );
};

type ExperienceProps = {
  items:
    | PageExperience[]
    | PageEducation[]
    | PageOpenSourceContribution[]
    | PageActivity[];
  title: string;
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
                  item?.experience?.companyName ||
                  item?.education?.institutionName
                }-${index}`}
                item={
                  item.experience ||
                  item.activity ||
                  item.education ||
                  item.openSource
                }
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
