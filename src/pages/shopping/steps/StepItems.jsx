const DEFAULT_MARGIN = 0.32

export default function StepItems({ data, onChange }) {
  const updateItem = (index, field, value) => {
    const items = [...data.articulos]
    items[index][field] = value

    items[index].precioVenta =
      items[index].precioUnitario / (1 - DEFAULT_MARGIN)

    onChange({ ...data, articulos: items })
  }

  return (
    <section>
      <h3>Artículos</h3>

      {data.articulos.map((item, i) => (
        <div key={i} className="item-row">
          <input value={item.descripcion} />
          <input
            type="number"
            value={item.cantidad}
            onChange={e => updateItem(i, 'cantidad', e.target.value)}
          />
          <input
            type="number"
            value={item.precioUnitario}
            onChange={e => updateItem(i, 'precioUnitario', e.target.value)}
          />
          <input
            disabled
            value={item.precioVenta?.toFixed(2)}
          />
        </div>
      ))}
    </section>
  )
}