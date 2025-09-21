import { createFileRoute } from '@tanstack/react-router';
import { cn } from '@/shared/utils/tailwindcss';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className={cn('p-2')}>
      <h3>Welcome Home!</h3>
    </div>
  );
}
