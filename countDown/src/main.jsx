// REACT
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// CONTEXT
import { CountDownProvider } from './content/CountDownContext.jsx'
// ESTILOS
import './index.css'

// PAGES
import Home from './routes/Home'
import CountDown from './routes/CountDown.jsx'

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
        path: "/countdown",
        element: <CountDown />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountDownProvider>
      <RouterProvider router={router} />
    </CountDownProvider>
  </React.StrictMode>,
)
