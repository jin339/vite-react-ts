import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { List } from 'antd'
import {} from '@ant-design/icons'
// 全局框架组件
import PageLayout from 'components/pageLayout'
import { useTimeAgo } from '../../utils/useTimeAgo'

// 页面样式
import styles from './index.module.scss'

const ContentList: FC = () => {
  const navigate = useNavigate()

  const data = [
    {
      title: 'Ant Design Title 1',
      description:
        'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
      time: '2023/12/13 11:51:19',
    },
  ]
  return (
    <List
      className={styles['list-wrap']}
      itemLayout='horizontal'
      dataSource={data}
      pagination={{ position: 'bottom', align: 'center', hideOnSinglePage: true }}
      renderItem={(item) => (
        <List.Item className={styles['item']} onClick={() => navigate('/item-list')}>
          <List.Item.Meta
            title={item.title}
            description={
              <>
                <div className={styles['description']}>{item.description}</div>
                <div className={styles['time']}>{useTimeAgo({ time: new Date(item.time) })}</div>
              </>
            }
          />
        </List.Item>
      )}
    />
  )
}

const Index: FC = () => {
  return <PageLayout contentSlot={<ContentList />} />
}

export default Index
