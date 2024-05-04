import { getClient } from '@/lib/client';

import { Menu } from './menu';

import { NavigationDocument } from '@/types.generated';

export const NavBar = async () => {
  const response = await getClient().query({
    query: NavigationDocument,
    context: {
      fetchOptions: {
        next: { revalidate: 60 },
      },
    },
  });
  const primaryNavigation =
    response.data?.navigationSettings?.primaryNavigation;

  return (
    <header className='print:hidden w-full px-responsive py-8 font-medium flex items-center justify-between z-10 relative'>
      {primaryNavigation && <Menu primaryNavigation={primaryNavigation} />}
    </header>
  );
};
