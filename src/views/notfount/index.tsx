import { FC } from 'react'
import { Empty, Button } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

// 页面样式
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'

const Index: FC = () => {
  const navigate = useNavigate()
  return (
    <div className={styles['wrap']}>
      <Empty description='嘿！！!这里啥都没有！' imageStyle={{ marginTop: '-20vh', height: '20vw' }}>
        <Button type='primary' icon={<LeftOutlined />} onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </Empty>
    </div>
  )
}

export default Index
