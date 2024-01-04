import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world from React router!!!!</div>,
  },
  {
    path: "/about",
    element: <div>Please keep attaching to knowing us!!!!</div>,
  },
  {
    path: "/contact",
    element: <div>Please contact us for more information!!!!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
