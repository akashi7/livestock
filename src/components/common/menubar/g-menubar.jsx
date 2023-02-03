import { Layout, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { getGroupAnchors } from '../../../routes/menus'
import './menu.css'

export default function GroupMenuBar() {
  const navigate = useNavigate()
  const Id = localStorage.getItem('gId')
  const handleNavigation = (e) => {
    navigate(e.key)
  }
  const { Content } = Layout
  return (
    <Content className={`menuBar`}>
      <Menu
        items={getGroupAnchors(Id)}
        mode='inline'
        onClick={handleNavigation}
        className='tags'
      />
    </Content>
  )
}
