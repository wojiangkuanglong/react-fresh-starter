import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Home } from './home';

const ProjectPage = React.lazy(() => import('@/routes/project/ProjectPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404</div>,
    children: [
      { index: true, element: <ProjectPage /> },
      {
        path: '/project',
        element: <ProjectPage />,
      },
      {
        path: '/test',
        element: <div>test</div>,
      },
    ],
  },
]);

export default router;
