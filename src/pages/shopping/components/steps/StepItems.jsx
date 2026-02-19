import { calculateTotalVenta } from '../../utils/shoppingUtils'

const StepItems = ({ data, onChange, readOnly }) => {

  const updateArticulo = (index, field, value) => {
    const articulos = [...data.articulos]
    articulos[index][field] = value
    onChange({ ...data, articulos })
  }

  return (
    <section>
      <h3>Artículos</h3>

      {data.articulos.map((item, index) => (
        <div key={index} className="item-row">

          <input
            placeholder="Código Oracle"
            value={item.codigoOracle}
            disabled={readOnly}
            onChange={e =>
              updateArticulo(index, 'codigoOracle', e.target.value)
            }
          />

          <input
            placeholder="Descripción"
            value={item.descripcion}
            disabled={readOnly}
            onChange={e =>
              updateArticulo(index, 'descripcion', e.target.value)
            }
          />

          <input
            type="number"
            value={item.cantidad}
            disabled={readOnly}
            onChange={e =>
              updateArticulo(index, 'cantidad', Number(e.target.value))
            }
          />

          <input
            value={item.unidad}
            disabled={readOnly}
            onChange={e =>
              updateArticulo(index, 'unidad', e.target.value)
            }
          />

          <input
            type="number"
            value={item.precioUnitario}
            disabled={readOnly}
            onChange={e =>
              updateArticulo(index, 'precioUnitario', Number(e.target.value))
            }
          />
        </div>
      ))}

      <div className="total-box">
        Total venta estimada:
        <strong>
          ${calculateTotalVenta(data.articulos, data.margen).toLocaleString('es-CO')}
        </strong>
      </div>
    </section>
  )
}

export default StepItems
