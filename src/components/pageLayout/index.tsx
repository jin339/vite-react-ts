import { FC, useState, ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Layout, Menu } from 'antd'
import {} from '@ant-design/icons'

// 页面样式
import styles from './index.module.scss'

interface MenuItem {
  key: string
  icon?: ReactNode
  label?: string
  children?: MenuItem[]
}

interface slotProps {
  siderMenu?: MenuItem[]
  contentSlot: ReactNode
}

const Index: FC<slotProps> = (props) => {
  const location = useLocation()
  const navigate = useNavigate()
  const { contentSlot, siderMenu } = props
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout className={styles['layout']}>
      <Layout.Header className={styles['header']}>
        <div className={styles['wrap']}>
          <div className={styles['logo']} onClick={() => navigate('/')}></div>
          <div className={styles['nav-wrap']}></div>
        </div>
      </Layout.Header>
      <Layout className={styles['content-wrap']}>
        <Layout.Content>
          <Layout.Content className={styles['content']}>{contentSlot}</Layout.Content>
          <Layout.Footer className={styles['footer']}>©{new Date().getFullYear()} Created by You</Layout.Footer>
        </Layout.Content>
        {siderMenu && (
          <Layout.Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <Menu
              className={styles['sider']}
              mode='inline'
              defaultSelectedKeys={[location.state]}
              items={siderMenu}
              onSelect={(e) => navigate('/items/' + e.key, { state: e.key })}
            />
          </Layout.Sider>
        )}
      </Layout>
    </Layout>
  )
}

export default Index
