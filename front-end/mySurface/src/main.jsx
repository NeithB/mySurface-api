import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Logon from './composants/user/Logon.jsx'
import { Toaster } from 'react-hot-toast'
import Dashboard from './admin/Dashboard.jsx'
import Interface from './composants/home/Interface.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Commentaire from './composants/publication/Commentaire.jsx'
import Page404 from './composants/Page404.jsx'


const queryClient=new QueryClient();
const route=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"*",
    element:<Page404/>
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
  },
  {
    path:"/interface",
    element:<Interface/>
  },
  {
    path:"/commentaire/:id",
    element:<Commentaire/>
  }


])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster/>
      <RouterProvider router={route}/>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>,
)
