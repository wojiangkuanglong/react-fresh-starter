import { Outlet } from 'react-router-dom';

import { Nav } from '@/components/ui/nav';

export const Home = () => {
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Nav className="mx-6" />
        </div>
      </div>

      <div className="flex-1 space-y-4 p-8 pt-6">{<Outlet />}</div>
    </div>
  );
};
