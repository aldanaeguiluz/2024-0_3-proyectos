import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import LoginPage from './presentation/login/LoginPage';
import MainPage from './presentation/main/MainPage';

const router= createBrowserRouter([
  {
    path:"/",
    element: <LoginPage/>
  },
  {
    path: "/main",
    element: <MainPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
