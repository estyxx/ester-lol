import { Activity, Education, Experience } from '@/types.generated';

export type Item = Experience | Education | Activity;

export const isExperience = (item: Item): item is Experience => {
  return item.__typename === 'Experience';
};

export const isEducation = (item: Item): item is Education => {
  return item.__typename === 'Education';
};

export const isActivity = (item: Item): item is Activity => {
  return item.__typename === 'Activity';
};
