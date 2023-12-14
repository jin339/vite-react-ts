import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from 'src/store/index'

import { List } from 'antd'
import {} from '@ant-design/icons'
// 全局框架组件
import PageLayout from 'components/pageLayout'
import { useTimeAgo } from 'utils/useTimeAgo'

// 页面样式
import styles from './index.module.scss'

const ContentList: FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const items = useSelector((state: RootState) => state.listReducer.list)

  return (
    <List
      className={styles['list-wrap']}
      itemLayout='horizontal'
      dataSource={items}
      pagination={{ position: 'bottom', align: 'center', hideOnSinglePage: true }}
      renderItem={(item) => (
        <List.Item className={styles['item']} onClick={() => navigate('/items/' + item.key, { state: item.key })}>
          <List.Item.Meta
            title={item.label}
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
