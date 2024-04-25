import React from 'react';

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <div
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-theme-reverse py-3 px-6 shadow-dark cursor-pointer
    hover:scale-150 absolute duration-500 '
      style={{ transform: `translate(${x}, ${y})` }}
    >
      {name}
    </div>
  );
};

const Skills = () => {
  return (
    <div className='hidden xl:block'>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <Skill name='Python' x='0vw' y='0vw' />
        <Skill name='GraphQL' x='-20vw' y='2vw' />
        <Skill name='Django' x='7vw' y='3vw' />
        <Skill name='ReactJS' x='-8vw' y='5vw' />
        <Skill name='Typescript' x='0vw' y='10vw' />
        <Skill name='NextJS' x='15vw' y='10vw' />
        <Skill name='Tailwind CSS' x='-18vw' y='18vw' />
        <Skill name='Wagtail CMS' x='-8vw' y='-20vw' />
        <Skill name='CSS' x='25vw' y='18vw' />
        <Skill name='Storybook' x='25vw' y='18vw' />
        <Skill name='Accessibility' x='-25vw' y='-18vw' />
      </div>
    </div>
  );
};

export default Skills;
