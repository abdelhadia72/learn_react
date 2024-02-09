import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Page from './components/Page';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Welcome from './Welcome';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PageHooks } from './Hooks/PageHooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>,
  }, {
    path: "/form",
    element: <Page/>,
  },  {
    path: "/hook",
    element: <PageHooks/>,
  },,  {
    path: "/page2",
    element: <Page2/>,
  },,  {
    path: "/page3",
    element: <Page3/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
