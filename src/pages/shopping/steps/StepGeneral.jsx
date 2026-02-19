import React from 'react'

const StepGeneral = ({ data, onChange }) => {
  return (
    <div className="form-step">

      <h3>Información general</h3>

      <div className="form-grid">

        <div className="form-group">
          <label>Fecha</label>
          <input
            type="date"
            value={data.fecha}
            onChange={(e) => onChange('fecha', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Proveedor</label>
          <input
            type="text"
            placeholder="Proveedor"
            value={data.proveedor}
            onChange={(e) => onChange('proveedor', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Cliente</label>
          <select
            value={data.cliente}
            onChange={(e) => onChange('cliente', e.target.value)}
          >
            <option value="">Seleccione cliente</option>
            <option value="Tecnosur">Tecnosur</option>
            <option value="Tecnofar">Tecnofar</option>
            <option value="Tecnoquimicas">Tecnoquímicas</option>
            <option value="Indugraficas">Indugráficas</option>
          </select>
        </div>

        <div className="form-group full">
          <label>Observaciones</label>
          <textarea
            rows="4"
            placeholder="Observaciones de la compra"
            value={data.observaciones}
            onChange={(e) => onChange('observaciones', e.target.value)}
          />
        </div>

      </div>
    </div>
  )
}

export default StepGeneral
