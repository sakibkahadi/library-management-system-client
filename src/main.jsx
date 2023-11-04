import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {  RouterProvider } from 'react-router-dom'
import Router from './Routes/Router'
import AuthProvider, { AuthContext } from './Routes/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <div className='max-w-7xl mx-auto'>
   <RouterProvider router={Router} />
   </div>
   </AuthProvider>
  </React.StrictMode>,
)
