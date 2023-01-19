import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/Shared/ErrorPage'
import Home from '../Pages/Home'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Login/Signup'
import Main from '../Layout/Main'
import ComingSoon from '../Pages/Shared/ComingSoon'
import Details from '../Pages/Details'
import SearchResult from '../Pages/SearchResult'
import Checkout from '../Pages/Checkout'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../Layout/DashboardLayout'
import Welcome from '../Pages/Dashboard/Weclcom'
import MyBookings from '../Pages/Dashboard/MyBookings'
import BecomeHost from '../Pages/Dashboard/BecomeHost'
import BecomeAHost from '../Pages/Dashboard/BecomeHost'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/coming-soon',
        element: <ComingSoon></ComingSoon>,
      },
      {
        path: '/service-details',
        element: <Details></Details>,
      },
      {
        path: '/search-result',
        element: <SearchResult></SearchResult>,
      },
      {
        path: '/checkout',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
      },
    ],
  },

  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '',
        element: <Welcome></Welcome>
      },
      {
        path: 'my-bookings',
        element: <MyBookings></MyBookings>
      },
      {
        path: 'become-host',
        element: <BecomeAHost></BecomeAHost>
      },
    ]
  }
])

export default router
