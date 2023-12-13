import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from 'src/store/index'

import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import PageLayout from 'components/pageLayout'

const Index: FC = () => {
  const navigate = useNavigate()
  const count = useSelector((state: RootState) => (state as any).addReducer.count)
  const dispatch = useDispatch<AppDispatch>()

  const menuItems = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'nav 1',
      onClick: () => navigate('/'),
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: 'nav 2',
      onClick: () => navigate('/item-list'),
    },
  ]

  return (
    <PageLayout
      siderMenu={menuItems}
      contentSlot={
        <div>
          <div>{count}</div>
          <button onClick={() => dispatch({ type: 'add' })}>+</button>
          <button onClick={() => dispatch({ type: 'minus' })}>-</button>
        </div>
      }
    />
  )
}

export default Index
