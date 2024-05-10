import React from 'react';

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <div
      className='flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-theme-reverse py-3 px-6 shadow-dark cursor-pointer
    hover:scale-150 absolute duration-500 '
      style={{ transform: `translate(${x}, ${y})` }}
    >
      {name}
    </div>
  );
};

const Skills = () => {
  return (
    <div className='hidden xl:block my-16 lg:my-32'>
      <h2 className='font-bold text-8xl mb-8 lg:mb-32 w-full text-center dark:text-light '>
        Skills
      </h2>
      <div className='flex items-center justify-center'>
        <div className='xl:w-full 3xl:w-[80%] h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
          <Skill name='Python' x='0vw' y='0vw' />
          <Skill name='GraphQL' x='-5vw' y='-10vw' />
          <Skill name='Django' x='7vw' y='3vw' />
          <Skill name='Web Scraping' x='12vw' y='18vw' />
          <Skill name='React' x='18vw' y='-5vw' />
          <Skill name='Typescript' x='-4vw' y='10vw' />
          <Skill name='NextJS' x='15vw' y='10vw' />
          <Skill name='Tailwind CSS' x='-18vw' y='-2vw' />
          <Skill name='CSS' x='-11vw' y='2vw' />
          <Skill name='Wagtail CMS' x='-8vw' y='-20vw' />
          <Skill name='Storybook' x='-18vw' y='18vw' />
          <Skill name='Accessibility' x='10vw' y='-15vw' />
          <Skill name='Public Speaking' x='-0vw' y='20vw' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
