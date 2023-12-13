import { FC, useState, ReactNode } from 'react'
import {} from 'react-router-dom'

import { Layout, Menu } from 'antd'
import {} from '@ant-design/icons'

// 页面样式
import styles from './index.module.scss'

interface MenuItem {
  key: string
  icon?: ReactNode
  label?: string
  onClick?: () => void
  children?: MenuItem[]
}

interface slotProps {
  siderMenu?: MenuItem[]
  contentSlot: ReactNode
}

const Index: FC<slotProps> = (props) => {
  const { contentSlot, siderMenu } = props
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout className={styles['layout']}>
      <Layout.Header className={styles['header']}></Layout.Header>
      <Layout className={styles['content-wrap']}>
        <Layout.Content>
          <Layout.Content className={styles['content']}>{contentSlot}</Layout.Content>
          <Layout.Footer className={styles['footer']}>©{new Date().getFullYear()} Created by You</Layout.Footer>
        </Layout.Content>
        {siderMenu && (
          <Layout.Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <Menu className={styles['sider']} mode='inline' defaultSelectedKeys={['2']} items={siderMenu} />
          </Layout.Sider>
        )}
      </Layout>
    </Layout>
  )
}

export default Index
