import { useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import ShoppingWizard from './components/ShoppingWizard'

const initialData = {
  fecha: new Date().toISOString().split('T')[0],
  estado: 'Cotización proveedor',
  proveedor: '',
  cliente: '',
  margen: 0.32,
  observaciones: '',
  articulos: [
    {
      codigoOracle: '',
      descripcion: '',
      cantidad: 1,
      unidad: 'Unidad',
      precioUnitario: 0,
      valorVenta: 0
    }
  ]
}

const ShoppingNew = () => {
  const [data, setData] = useState(initialData)

  const handleSave = () => {
    console.log('Crear compra:', data)
  }

  return (
    <MainLayout>
      <ShoppingWizard
        data={data}
        onChange={setData}
        onSave={handleSave}
        mode="new"
      />
    </MainLayout>
  )
}

export default ShoppingNew
