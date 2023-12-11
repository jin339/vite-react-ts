import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import {} from 'antd'
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons'

import PageLayout from 'components/pageLayout'

// 页面样式
// import styles from './index.module.scss'

const Index: FC = () => {
  const navigate = useNavigate()

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

  return <PageLayout siderMenu={menuItems} contentSlot={<div>222</div>} />
}

export default Index
