import { useParams } from 'react-router-dom'
import MainLayout from '../../components/layout/MainLayout'
import ShoppingWizard from './components/ShoppingWizard'
import { shoppingData } from './data/shoppingMock'
import { useState } from 'react'

const ShoppingEdit = () => {
  const { id } = useParams()

  const purchase = shoppingData.find(p => p.id === id)
  const [data, setData] = useState(purchase)

  if (!purchase) {
    return (
      <MainLayout>
        <p>Compra no encontrada</p>
      </MainLayout>
    )
  }

  const handleUpdate = () => {
    console.log('Actualizar compra:', data)
  }

  return (
    <MainLayout>
      <ShoppingWizard
        data={data}
        onChange={setData}
        onSave={handleUpdate}
        mode="edit"
      />
    </MainLayout>
  )
}

export default ShoppingEdit
