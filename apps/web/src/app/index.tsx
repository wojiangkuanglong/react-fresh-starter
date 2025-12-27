import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { queryClient } from '@repo/lib';
import { createRouter } from '@tanstack/react-router';
import { createRoot } from 'react-dom/client';
import { routeTree } from '@/routeTree.gen';

import './global.css';
import { App } from './App';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
});

if (import.meta.env.PROD) {
  disableReactDevTools();
}

async function enableMocking() {
  if (import.meta.env.VITE_MOCK === 'true') {
    const { worker } = await import('./browser');
    return worker.start();
  }
  return;
}

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

enableMocking().then(() => {
  root.render(<App />);
});
