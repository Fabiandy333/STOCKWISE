const StepGeneral = ({ data, onChange, readOnly }) => {
  return (
    <section>
      <h3>Información General</h3>

      {/* <div className="state-pill">
        Estado actual: <strong>{data.estado}</strong>
      </div> */}

      <div className="form-grid">
        <label>
          Fecha
          <input
            type="date"
            value={data.fecha}
            disabled={readOnly}
            onChange={e =>
              onChange({ ...data, fecha: e.target.value })
            }
          />
        </label>

        <label>
          Proveedor *
          <input
            value={data.proveedor}
            disabled={readOnly}
            onChange={e =>
              onChange({ ...data, proveedor: e.target.value })
            }
          />
        </label>

        <label>
          Cliente *
          <input
            value={data.cliente}
            disabled={readOnly}
            onChange={e =>
              onChange({ ...data, cliente: e.target.value })
            }
          />
        </label>

        <label>
          Margen
          <input
            type="number"
            step="0.01"
            min="0"
            max="0.9"
            value={data.margen}
            disabled={readOnly}
            onChange={e =>
              onChange({
                ...data,
                margen: Number(e.target.value)
              })
            }
          />
        </label>
      </div>
    </section>
  )
}

export default StepGeneral
