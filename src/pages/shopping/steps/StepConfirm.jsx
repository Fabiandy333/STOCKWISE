import React from 'react'
import { calculateTotal } from '../utils/shoppingUtils'

const StepConfirm = ({ data, onSubmit }) => {
  const total = calculateTotal(data.articulos)

  return (
    <div className="form-step">

      <h3>Confirmar compra</h3>

      {/* Resumen general */}
      <div className="summary-card">
        <p><strong>Fecha:</strong> {data.fecha}</p>
        <p><strong>Proveedor:</strong> {data.proveedor}</p>
        <p><strong>Cliente:</strong> {data.cliente}</p>
        <p><strong>Estado inicial:</strong> Cotización proveedor</p>
      </div>

      {/* Artículos */}
      <h4>Artículos</h4>
      <table className="summary-table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Cant.</th>
            <th>Unidad</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.articulos.map((a, idx) => (
            <tr key={idx}>
              <td>{a.codigoOracle || 'N/A'}</td>
              <td>{a.descripcion}</td>
              <td>{a.cantidad}</td>
              <td>{a.unidad}</td>
              <td>${a.precioUnitario.toLocaleString('es-CO')}</td>
              <td>
                ${(a.cantidad * a.precioUnitario).toLocaleString('es-CO')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total */}
      <div className="summary-total">
        <strong>Total compra:</strong>{' '}
        ${total.toLocaleString('es-CO')}
      </div>

      {/* Confirmación */}
      <div className="confirm-box">
        <p>
          Al confirmar, la compra quedará registrada en estado
          <strong> Cotización proveedor</strong>.
        </p>

        <button className="btn-primary" onClick={onSubmit}>
          Confirmar compra
        </button>
      </div>

    </div>
  )
}

export default StepConfirm
