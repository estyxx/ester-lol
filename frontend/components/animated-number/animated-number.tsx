type AnimatedNumberProps = {
  value: number;
  label: string;
};
export const AnimatedNumber = ({ value, label }: AnimatedNumberProps) => {
  return (
    <div className='flex flex-col items-center justify-center xl:items-center'>
      <span className='inline-block text-7xl text-theme font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
        <span data-animate-number data-target={value}>
          {value}
        </span>
        +
      </span>

      <h2 className='mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
        {label}
      </h2>
    </div>
  );
};
