import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ collapsed }) {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <h2 className="logo">StockWise</h2>
      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/inventory">Inventario</NavLink>
        <NavLink to="/orders">Pedidos</NavLink>
        <NavLink to="/printers">Impresoras</NavLink>
        <NavLink to="/sds-upload">SDS</NavLink>
        <NavLink to="/admin/users">Usuarios</NavLink>
      </nav>
    </aside>
  );
}
