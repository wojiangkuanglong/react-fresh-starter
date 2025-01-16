import { cn } from '@/utils/tailwindcss';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { i18n, t } = useTranslation();
  const curLanguage = i18n.language;
  return (
    <div className={cn('hidden flex-col md:flex')}>
      <div className="border-b">
        <div className="flex h-16 items-center justify-end px-4">
          <button
            type="button"
            onClick={() => {
              i18n.changeLanguage(curLanguage === 'en' ? 'zh' : 'en');
            }}
          >
            {curLanguage}
          </button>
        </div>
      </div>

      <div className="flex-1 space-y-4 p-8 pt-6" data-testid="home-test">
        {t('test')}
      </div>
    </div>
  );
};
