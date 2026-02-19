import { useParams } from 'react-router-dom'
import { shoppingData } from '../data/shoppingMock'
import ShoppingTimeline from '../components/ShoppingTimeline'
import ShoppingWizard from '../components/ShoppingWizard'
import MainLayout from '../../../components/layout/MainLayout'

const ShoppingDetail = () => {
  const { id } = useParams()

  const purchase = shoppingData.find(p => p.id === id)

  if (!purchase) {
    return (
      <MainLayout>
        <p>Compra no encontrada</p>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="shopping-detail">
        <h2>Compra {purchase.id}</h2>

        <ShoppingTimeline currentStatus={purchase.estado} />
<ShoppingWizard
  data={purchase}
  readOnly
  mode="view"
/>
      </div>
    </MainLayout>
  )
}

export default ShoppingDetail

