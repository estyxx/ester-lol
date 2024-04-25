import clsx from 'clsx';

type HeadingProps = {
  text: string;
  spaceAfter?: boolean;
  classname?: string;
};

export const Heading = ({
  text,
  spaceAfter = false,
  classname,
}: HeadingProps) => {
  return (
    <div
      className={clsx(
        `w-full mx-auto py-2 flex items-center justify-center text-left
        overflow-hidden sm:py-0 `,
        { 'mb-16': spaceAfter },
      )}
    >
      <h1
        className={`inline-block w-full text-theme font-bold text-8xl ${classname}`}
      >
        {text.split(' ').map((word, index) => (
          <span
            key={`${word}-${index}`}
            className={`inline-block animate-reveal delay-${500 * index}`}
          >
            {word}&nbsp;
          </span>
        ))}
      </h1>
    </div>
  );
};
