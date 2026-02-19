import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from '../../components/layout/MainLayout'
import ShoppingTable from './components/ShoppingTable'
import ShoppingWizard from './components/ShoppingWizard'
import ShoppingDetail from './detail/ShoppingDetail'
import './Shopping.css'


const Shopping = () => {
  return (
    <MainLayout>
        <Routes>
        <Route index element={<ShoppingTable />} />
        <Route path="new" element={<ShoppingWizard />} />
        <Route path=":id" element={<ShoppingDetail />} />
        </Routes>
    </MainLayout>
  )

}
export default Shopping
