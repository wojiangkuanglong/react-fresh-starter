import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/settings/b')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/settings/b"!</div>;
}
