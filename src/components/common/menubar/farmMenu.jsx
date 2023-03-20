import { Layout, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { getFarmAnchors } from '../../../routes/menus'
import './menu.css'

export default function FarmMenuBar() {
  const navigate = useNavigate()
  const Id = localStorage.getItem('fId')
  const handleNavigation = (e) => {
    navigate(e.key)
  }
  const { Content } = Layout
  return (
    <Content className={`menuBar`}>
      <Menu
        items={getFarmAnchors(Id)}
        mode='inline'
        onClick={handleNavigation}
        className='tags'
      />
    </Content>
  )
}
