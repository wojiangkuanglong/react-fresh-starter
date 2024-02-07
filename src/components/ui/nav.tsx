import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { cn } from '@/utils/tailwindcss';

export function Nav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const { t } = useTranslation();
  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6', className)} {...props}>
      <NavLink
        to="/project"
        className={({ isActive }) =>
          cn('text-sm font-medium transition-colors hover:text-primary', {
            'text-muted-foreground': !isActive,
          })
        }
      >
        {t('nav.project')}
      </NavLink>
      <NavLink
        to="/test"
        className={({ isActive }) =>
          cn('text-sm font-medium transition-colors hover:text-primary', {
            'text-muted-foreground': !isActive,
          })
        }
      >
        {t('nav.test')}
      </NavLink>
    </nav>
  );
}
