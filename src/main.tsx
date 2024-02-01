import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { ClickToComponent } from 'click-to-react-component';

import '@/styles/index.css';

import App from './App';

if (import.meta.env.PROD) {
  disableReactDevTools();
}

const container = document.getElementById('root');
const root = createRoot(container!);

if (import.meta.env.DEV) {
  if (import.meta.env.VITE_MOCK === 'true') {
    import('@/__mocks__/msw')
      .then(({ startWorker }) => {
        startWorker();
      })
      .then(() =>
        root.render(
          <StrictMode>
            <App />
            <ClickToComponent />
          </StrictMode>,
        ),
      );
  } else {
    root.render(
      <StrictMode>
        <App />
        <ClickToComponent />
      </StrictMode>,
    );
  }
} else {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
