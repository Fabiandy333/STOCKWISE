import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import InventoryList from "../pages/inventory/InventoryList";
import OrdersList from "../pages/orders/OrdersList";
import OrderDetail from "../pages/orders/OrderDetail";
import Printers from "../pages/printers/Printers";
import SdsUpload from "../pages/sds/SdsUpload";
import MyKeys from "../pages/my-keys/MyKeys";
import Shopping from "../pages/shopping/Shopping";

// 👉 nuevos imports
import ShoppingWizard from "../pages/shopping/components/ShoppingWizard";
import ShoppingDetail from "../pages/shopping/detail/ShoppingDetail";
import ShoppingNew from "../pages/shopping/ShoppingNew";
import ShoppingEdit from "../pages/shopping/ShoppingEdit";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Base */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<InventoryList />} />
        <Route path="/orders" element={<OrdersList />} />
        <Route path="/order-detail" element={<OrderDetail />} />
        <Route path="/printers" element={<Printers />} />
        <Route path="/sds-upload" element={<SdsUpload />} />
        <Route path="/my-keys" element={<MyKeys />} />

        {/* 🛒 SHOPPING */}
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/shopping/new" element={<ShoppingNew />} />
        <Route path="/shopping/:id" element={<ShoppingDetail />} />
        <Route path="/shopping/:id/edit" element={<ShoppingEdit />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />

      </Routes>
    </BrowserRouter>
  );
}
