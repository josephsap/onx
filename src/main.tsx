import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage.tsx'
import SingleJokePage from './pages/SingleJokePage.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'joke/:jokeId',
    element: <SingleJokePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
