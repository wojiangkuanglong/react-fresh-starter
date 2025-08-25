import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/utils/tailwindcss';
import { useDemoModalStore } from '@/widgets/DemoModal/model/useDemoModalStore';
import { DemoModal } from '@/widgets/DemoModal/ui/DemoModal';

export const Home = () => {
  const { i18n, t } = useTranslation();
  const curLanguage = i18n.language;

  const setVisible = useDemoModalStore((state) => state.setVisible);

  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className={cn('flex h-16 items-center justify-end px-4')}>
          <Button
            onClick={() => {
              i18n.changeLanguage(curLanguage === 'en' ? 'zh-CN' : 'en');
            }}
          >
            {curLanguage}
          </Button>
        </div>
      </div>

      <Button className="w-20 m-6" onClick={() => setVisible(true)}>
        {t('click')}
      </Button>
      <DemoModal />
    </div>
  );
};
