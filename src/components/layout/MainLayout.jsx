import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import './MainLayout.css'

const titles = {
  '/dashboard': 'Dashboard',
  '/inventory': 'Inventario',
  '/orders': 'Pedidos',
  '/printers': 'Impresoras',
  '/sds': 'SDS'
}

export default function MainLayout({ children }) {
  const location = useLocation()
  const title = titles[location.pathname] || 'TonerWare'
  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebar = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={`layout ${collapsed ? 'collapsed' : ''}`}>
      <Sidebar collapsed={collapsed} />

      <div className="layout-main">
        <Header
          title={title}
          sidebarCollapsed={collapsed}
          onToggleSidebar={toggleSidebar}
        />

        <main className="content">
          {children}
        </main>
      </div>
    </div>
  )
}
