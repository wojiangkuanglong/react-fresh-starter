import { createFileRoute } from '@tanstack/react-router';
import { Markdown } from '@/features/Markdown/ui/Markdown';

export const Route = createFileRoute('/markdown')({
  component: Markdown,
});
