
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import InventoryList from "../pages/inventory/InventoryList";
import OrdersList from "../pages/orders/OrdersList";
import OrderDetail from "../pages/orders/OrderDetail";
import Printers from "../pages/printers/Printers";
import SdsUpload from "../pages/sds/SdsUpload";
// import Users from "../pages/users/Users";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirige la raíz a /dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<InventoryList />} />
        <Route path="/orders" element={<OrdersList />} />
        <Route path="/order-detail" element={<OrderDetail />} />
        <Route path="/printers" element={<Printers />} />
        <Route path="/sds-upload" element={<SdsUpload />} />
        {/* <Route path="/users" element={<Users />} /> */}
        {/* Opcional: captura rutas no existentes */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
