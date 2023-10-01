import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ProviderContext from './Providers/ProviderContext';
import Orders from './components/Orders/Orders';
import PrivateRoute from './routes/PrivateRoute';
import Shop from './components/Shop';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: '/shop',
        element: <PrivateRoute><Shop></Shop></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderContext>
      <RouterProvider router={router}>

      </RouterProvider>
    </ProviderContext>
  </React.StrictMode>,
)
