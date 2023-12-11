import { useRoutes } from 'react-router-dom'

import Home from 'views/home'
import ItemList from 'views/itemList'

const routes = [
  {
    path: '/',
    name: 'home',
    element: <Home />,
  },
  {
    path: '/item-list',
    name: 'itemlist',
    element: <ItemList />,
  },
]

const Routes = () => useRoutes(routes)

export default Routes
