import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Router/Router'
import { RouterProvider } from 'react-router-dom'
import '@coreui/coreui/dist/css/coreui.min.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
