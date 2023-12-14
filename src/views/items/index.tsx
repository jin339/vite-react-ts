import { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from 'src/store/index'
import { ListArrayTpye } from 'store/reducers/listReducer'

import { Typography } from 'antd'
import {} from '@ant-design/icons'
import PageLayout from 'components/pageLayout'

const Index: FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const menuItems = useSelector((state: RootState) => state.listReducer.list)
  const location = useLocation()
  const [content, setContent] = useState<ListArrayTpye | null>(null)

  useEffect(() => {
    if (menuItems) {
      const index = menuItems?.findIndex((e) => e.key === location.state)
      if (index !== -1) {
        setContent(menuItems[index])
      } else {
        navigate('/404')
      }
    }
  }, [menuItems, location])

  return (
    <PageLayout
      siderMenu={menuItems}
      contentSlot={
        content && (
          <Typography>
            <Typography.Title level={4} style={{ margin: 0 }}>
              {content.label}
            </Typography.Title>
            <Typography.Text type='secondary'>{content.time}</Typography.Text>
            <Typography.Paragraph style={{ marginTop: '10px' }}>{content.description}</Typography.Paragraph>
          </Typography>
        )
      }
    />
  )
}

export default Index
