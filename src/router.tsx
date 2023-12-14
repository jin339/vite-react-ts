import { useRoutes } from 'react-router-dom'

import Home from 'views/home'
import Items from 'views/items'
import NotFount from 'views/notfount'

const routes = [
  {
    path: '*',
    name: '404',
    element: <NotFount />,
  },
  {
    path: '/',
    name: 'home',
    element: <Home />,
  },
  {
    path: '/items/*',
    name: 'items',
    element: <Items />,
  },
]

const Routes = () => useRoutes(routes)

export default Routes
