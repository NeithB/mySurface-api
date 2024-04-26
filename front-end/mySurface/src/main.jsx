import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Logon from './composants/user/Logon.jsx'
import { Toaster } from 'react-hot-toast'
import Dashboard from './admin/Dashboard.jsx'

const route=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/logon",
    element:<Logon/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  },
  {
    path:"/update/:id"
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster/>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
