// 1️⃣ Total COSTO (proveedor)
export const calculateTotalCosto = (articulos = []) => {
  return articulos.reduce(
    (acc, a) => acc + (a.cantidad || 0) * (a.precioUnitario || 0),
    0
  )
}

// 2️⃣ Valor de venta por artículo
export const calculateValorVentaItem = (item, margen) => {
  if (!item?.precioUnitario || !item?.cantidad) return 0
  if (margen >= 1) return 0 // protección

  const precioVentaUnitario = item.precioUnitario / (1 - margen)
  return precioVentaUnitario * item.cantidad
}




// 3️⃣ Total VENTA
export const calculateTotalVenta = (articulos = [], margen) => {
  return articulos.reduce(
    (acc, item) => acc + calculateValorVentaItem(item, margen),
    0
  )
}
