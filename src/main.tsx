import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import GlobalLayout from './components/Layout';
import HomePage from './pages/HomePage';
import SingleJokePage from './pages/SingleJokePage';
import RandomJokePage from './pages/RandomJokePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'joke/:jokeId',
    element: <SingleJokePage />,
  },
  {
    path: 'random',
    element: <RandomJokePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <GlobalLayout>
      <RouterProvider router={router} />
    </GlobalLayout>
  </React.StrictMode>,
)
