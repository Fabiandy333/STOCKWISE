import './Header.css'
import menuOpen from '../../assets/icons/menu-open.png'
import menuClose from '../../assets/icons/menu-close.png'

export default function Header({ title, onToggleSidebar,sidebarCollapsed,user }) {
  return (
    <header className="header">
      {/* IZQUIERDA */}
      <div className="header-left">
        <button
          className="menu-btn"
          onClick={onToggleSidebar}
          aria-label={sidebarCollapsed ? 'Mostrar menú' : 'Ocultar menú'}
        >
          <img
    src={sidebarCollapsed ? menuOpen : menuClose}
    alt="Menu"
    width={25}
    height={25}
  />
        </button>

        <h1 className="page-title">{title}</h1>
      </div>

      {/* DERECHA */}
      <div className="header-right">
        <div className="search-box">
          <input type="text" placeholder="Buscar..." />
        </div>

        <button className="notification-btn">
          🔔
          <span className="badge">3</span>
        </button>

        <div className="user-info">
          <img
            src="https://ui-avatars.com/api/?name=Fabian+Camayo"
            alt="User"
          />
          <div className="user-text">
            <span className="user-name">Fabian Camayo</span>
            <span className="user-role">Administrador</span>
          </div>
        </div>
      </div>
    </header>
  )
}
