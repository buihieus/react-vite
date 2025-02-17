import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
    path: "/",
    element: <App /> ,
    },
    {
      path: "/login",
      element: <h1>Login page</h1>,
    },
    {
      path: "/register",
      element: <h1>Register page</h1>,
    },
    {
      path: "/user",
      element: <h1>User page</h1>,
    },
    {
      path: "/products",
      element: <h1>Products page</h1>,
    }
  ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
