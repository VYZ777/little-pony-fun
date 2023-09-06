import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './components/Main'
import Alicorn from './components/Alicorn'
import Unicorn from './components/Unicorn'
import AllCharacters from './components/AllCharacters'
import Gallery from './components/Gallery'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,
  },
  {
    path: '/alicorn',
    Component: Alicorn,
  },
  {
    path: '/unicorn',
    Component: Unicorn,
  },
  {
    path: '/characters',
    Component: AllCharacters,
  },
  {
    path: '/gallery',
    Component: Gallery,
  },
])

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<div>Unknown page</div>} />
  )
}

export default App
