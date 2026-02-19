import './ShoppingWizard.css'
import { calculateTotalVenta } from '../utils/shoppingUtils'

const ESTADOS = [
  'Cotización proveedor',
  'Cotización cliente',
  'Aprobación cliente',
  'Aprobación gerente para compra',
  'En Bodega Carvajal',
  'Pedido a bodega',
  'Entregado al usuario',
  'En proceso de facturación',
  'Finalizado'
]

const ShoppingWizard = ({
  data,
  onChange,
  onSave,
  readOnly = false,
  mode = 'new'
}) => {

  const updateArticulo = (index, field, value) => {
    const articulos = [...data.articulos]
    articulos[index][field] = value

    // cálculo automático de venta
    if (field === 'precioUnitario' || field === 'cantidad') {
      articulos[index].valorVenta =
        articulos[index].precioUnitario / (1 - data.margen)
    }

    onChange({ ...data, articulos })
  }

  return (
    <div className="shopping-wizard">

      {/* ESTADO */}
      <div className="state-pill">
        Estado actual:
        <strong> {data.estado}</strong>
      </div>

      {/* INFORMACIÓN GENERAL */}
      <section>
        <h3>Información General</h3>

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

      {/* ARTÍCULOS */}
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
              placeholder="Precio unitario"
              value={item.precioUnitario}
              disabled={readOnly}
              onChange={e =>
                updateArticulo(index, 'precioUnitario', Number(e.target.value))
              }
            />

            <div className="readonly">
              Venta:
              <strong>
                ${calculateTotalVenta(data.articulos, data.margen)}
              </strong>
            </div>
          </div>
        ))}
      </section>

      {/* OBSERVACIONES */}
      <section>
        <h3>Observaciones</h3>
        <textarea
          value={data.observaciones}
          disabled={readOnly}
          onChange={e =>
            onChange({ ...data, observaciones: e.target.value })
          }
          placeholder="Texto e imágenes"
        />
      </section>

    </div>
  )
}

export default ShoppingWizard
