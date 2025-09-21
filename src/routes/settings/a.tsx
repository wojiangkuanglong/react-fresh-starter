import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/settings/a')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/settings/a"!</div>;
}
