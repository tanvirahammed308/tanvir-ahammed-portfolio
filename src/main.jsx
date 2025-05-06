import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-[#f2f5f8]  '>
      <div className=''>
  <RouterProvider router={router} />

      </div>

    </div>
  </StrictMode>,
)
