import { createBrowserRouter } from 'react-router';

import { Home } from './home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404</div>,
  },
]);

export default router;
