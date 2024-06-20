import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, Route, RouterProvider} from 'react-router-dom'

import Home from './routes/Home.jsx'
import Contador from './routes/Contador.jsx'
import { ContadorProvider } from './context/ContadorContexto.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contador",
        element: <Contador />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContadorProvider>
      <RouterProvider router={router}/>
    </ContadorProvider>
  </React.StrictMode>,
)
