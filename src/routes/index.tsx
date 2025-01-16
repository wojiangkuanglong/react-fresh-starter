import { createBrowserRouter } from 'react-router';

import { Home } from './home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404</div>,
  },
]);

export default router;
