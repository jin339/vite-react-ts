import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { List } from 'antd'
import {} from '@ant-design/icons'

import PageLayout from 'components/pageLayout'

// 页面样式
import styles from './index.module.scss'

const ContentList = () => {
  const navigate = useNavigate()
  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
  ]
  return (
    <List
      className={styles['list-wrap']}
      itemLayout='horizontal'
      dataSource={data}
      pagination={{ position: 'bottom', align: 'center' }}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta title={item.title} description='this is description' onClick={() => navigate('/item-list')} />
        </List.Item>
      )}
    />
  )
}

const Index: FC = () => {
  return <PageLayout contentSlot={<ContentList />} />
}

export default Index
