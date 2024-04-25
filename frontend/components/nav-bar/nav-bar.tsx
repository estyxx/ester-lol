import { getClient } from '@/lib/client';

import { NavigationDocument } from './navigation.generated';
import { Menu } from './menu';

export const NavBar = async () => {
  const {
    data: {
      navigationSettings: { primaryNavigation },
    },
  } = await getClient().query({ query: NavigationDocument });

  return (
    <header className='print:hidden w-full px-responsive py-8 font-medium flex items-center justify-between z-10 relative'>
      <Menu primaryNavigation={primaryNavigation} />
    </header>
  );
};
