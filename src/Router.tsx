import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}