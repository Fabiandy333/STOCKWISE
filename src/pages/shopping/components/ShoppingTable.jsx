import { shoppingData } from '../data/shoppingMock'
import { useNavigate } from 'react-router-dom'
import {
  calculateTotalCosto,
  calculateTotalVenta,
  calculateValorVentaItem
} from '../utils/shoppingUtils'

const ShoppingTable = () => {

  // ✅ 1. Inicializar navegación
  const navigate = useNavigate()

  // ✅ 2. Handlers reales
  const handleNew = () => {
    navigate('/shopping/new')
  }

  const handleView = (id) => {
    navigate(`/shopping/${id}`)
  }

  const handleEdit = (id) => {
    navigate(`/shopping/${id}/edit`)
  }

  return (
    <div className="shopping-page">

      {/* Header */}
      <div className="shopping-header">
        <button className="btn-primary" onClick={handleNew}>
          + Nueva compra
        </button>
      </div>

      {/* Tabla */}
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Código</th>
              <th>Proveedor</th>
              <th>Cliente</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {shoppingData.map((item) => (
              <tr key={item.id}>
                <td>{item.fecha}</td>
                <td>{item.id}</td>
                <td>{item.proveedor}</td>
                <td>{item.cliente}</td>
                <td>
                   ${calculateTotalVenta(item.articulos, item.margen).toLocaleString('es-CO')}
                </td>
                <td>{item.estado}</td>
                <td className="actions">
                  <button
                    className="btn-secondary"
                    onClick={() => handleView(item.id)}
                    title="Ver compra"
                  >
                    👁️
                  </button>
                  <button
                    className="btn-secondary"
                    onClick={() => handleEdit(item.id)}
                    title="Editar compra"
                  >
                    ✏️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ShoppingTable
