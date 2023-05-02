import { Layout, Menu } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuOutlined } from '@ant-design/icons'
import { getMenus } from '../../../routes/menus'
import logo from '../../../assets/images/logo.jpeg'
const Sidebar = () => {
  const { Sider } = Layout
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()
  const handleNavigation = (e) => {
    navigate(e.key)
  }
  return (
    <Sider
      width={236}
      collapsed={toggle}
      className='min-h-[100%] bg-white'
      style={{ background: '#FAFBFE' }}
    >
      <div className='h-[65px] w-[100%] bg-white mb-2 flex justify-between items-center'>
        <section className='w-4/6 h-[60px] flex items-center justify-center'>
          <img src={logo} className='h-[40px] w-[70%] object-fit' alt='img' />
        </section>
        <MenuOutlined
          onClick={() => setToggle(!toggle)}
          className='cursor-pointer border-blue border p-2 mr-2'
          style={{ fontSize: '15px', color: '#1D4ED8' }}
        />
      </div>
      <Menu items={getMenus()} mode='inline' onClick={handleNavigation} />
    </Sider>
  )
}
export default Sidebar
