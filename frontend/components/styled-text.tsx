import clsx from 'clsx';

type Props = {
  baseTextSize?: 1 | 2;
  children?: React.ReactNode;
  text?: string | null;
  classname?: string;
};

export const StyledText = ({
  baseTextSize = 1,
  children,
  text,
  classname,
}: Props) => {
  return (
    <div
      className={clsx(
        'prose  text-theme font-sans break-words max-w-none font-medium',
        'print:text-sm',
        // text styles
        {
          'prose-p:text-md prose-p:lg:text-2md  prose-p:text-grey-900  prose-li:text-md  prose-li:lg:text-2md  prose-li:text-grey-900':
            baseTextSize === 1,
          'prose-p:text-md prose-p:text-grey-900  prose-li:text-md  prose-li:text-grey-900':
            baseTextSize === 2,
        },
        // h styles
        'prose-h2:font-semibold prose-h2:text-3md prose-h2:leading-8 prose-h2:lg:text-xl prose-h2:lg:leading-11 prose-h2:text-grey-900',
        'prose-h3:font-semibold prose-h3:text-2md prose-h3:leading-5 prose-h3:lg:text-lg prose-h3:lg:leading-8 prose-h3:text-grey-900',
        'prose-h4:font-semibold prose-h4:text-md prose-h4:leading-3 prose-h4:lg:text-2md prose-h4:lg:leading-6 prose-h4:text-grey-900',

        // links
        'hover:prose-a:text-primary-dark prose-a:text-primary prose-a:transition-colors',
        // spacing
        'prose-p:m-0 prose-p:mb-4 prose-ul:m-0 prose-ul:mb-4 prose-ol:m-0 prose-ol:mb-4',
        'prose-h2:m-0 prose-h2:mb-4 prose-h3:m-0 prose-h3:mb-4 prose-h4:m-0 prose-h4:mb-4',
        'last:prose-h2:mb-0 last:prose-h3:mb-0 last:prose-h4:mb-0 last:prose-p:mb-0 last:prose-ul:mb-0 last:prose-ol:mb-0',

        // lists
        'prose-li:marker:text-black prose-li:marker:dark:text-light prose-li:marker:m-0',
        'prose-ul:list-outside prose-ul:pl-5 prose-li:p-0',
        'prose-ol:list-outside prose-ol:pl-5',
        'first:prose-li:mt-0 last:prose-li:mb-0',
        classname,
      )}
      dangerouslySetInnerHTML={{
        __html: text || '',
      }}
    >
      {children}
    </div>
  );
};
