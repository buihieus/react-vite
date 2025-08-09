import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login.jsx';

import RegisterPage from './pages/register.jsx';

import UserPage from './pages/user.jsx';

import BookPage from './pages/book.jsx';

import './style/global.css';

import TodoApp from './components/todo/TodoApp';
import ErrorPage from './pages/error.jsx';
import { AuthWrapper } from './components/context/auth.contex.jsx';
import PrivateRoute from './pages/private.route.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // Nested Routes với outlet
    children: [
      {
        index: true,
        element: <TodoApp />
      },
      {
        path: "/user",
        element: <UserPage />,
      },
      {
        path: "/books",
        element: (
          <PrivateRoute>
            <BookPage />
          </PrivateRoute>
        ),
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/logout",
    element: <RegisterPage />,
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthWrapper>
    <RouterProvider router={router} />
  </AuthWrapper>
  // </React.StrictMode>,
)
// router chuyen huong trang