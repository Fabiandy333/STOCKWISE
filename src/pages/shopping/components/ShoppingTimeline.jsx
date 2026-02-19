import React from 'react'
import './ShoppingTimeline.css'

const STATUSES = [
  'Cotización proveedor',
  'Cotización cliente',
  'Aprobación cliente',
  'Aprobación gerente',
  'En Bodega Carvajal',
  'Pedido a bodega',
  'Entregado al usuario',
  'En proceso de facturación',
  'Finalizado',
  'Cancelado'
]

const ShoppingTimeline = ({ currentStatus }) => {
  const currentIndex = STATUSES.indexOf(currentStatus)

  return (
    <div className="timeline">
      {STATUSES.map((status, index) => (
        <div
          key={status}
          className={`timeline-step
            ${index <= currentIndex ? 'active' : ''}`}
        >
          <div className="dot" />
          <span>{status}</span>
        </div>
      ))}
    </div>
  )
}

export default ShoppingTimeline
