import { calculateTotalVenta } from '../../utils/shoppingUtils'

const StepConfirm = ({ data }) => {
  return (
    <section>
      <h3>Confirmación</h3>

      <p><strong>Proveedor:</strong> {data.proveedor}</p>
      <p><strong>Cliente:</strong> {data.cliente}</p>
      <p><strong>Estado:</strong> {data.estado}</p>

      <p>
        <strong>Total:</strong>{' '}
        ${calculateTotalVenta(data.articulos, data.margen).toLocaleString('es-CO')}
      </p>
    </section>
  )
}

export default StepConfirm
