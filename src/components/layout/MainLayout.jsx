import { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import './MainLayout.css'
import { useLocation } from 'react-router-dom'

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

  return (
    <div className={`layout ${collapsed ? 'collapsed' : ''}`}>
      <Sidebar collapsed={collapsed} />

      <div className="layout-main">
        <Header title={title} 
        sidebarCollapsed={collapsed}
        onToggleSidebar={() => setCollapsed(!collapsed)} />
        <main className="content">{children}</main>
      </div>
    </div>
  )
}
