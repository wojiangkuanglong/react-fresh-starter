import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

import { Nav } from '@/components/ui/nav';

export const Home = () => {
  const { i18n } = useTranslation();
  const curLanguage = i18n.language;
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center justify-between px-4">
          <Nav className="mx-6" />
          <button
            onClick={() => {
              i18n.changeLanguage(curLanguage === 'en' ? 'zh-CN' : 'en');
            }}
          >
            {curLanguage}
          </button>
        </div>
      </div>

      <div className="flex-1 space-y-4 p-8 pt-6">{<Outlet />}</div>
    </div>
  );
};
