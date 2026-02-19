export const shoppingData = [
  {
    id: 'CP-0001',
    fecha: new Date().toISOString().split('T')[0],
    proveedor: 'DataScan',
    cliente: 'Tecnosur',
    estado: 'Pedido a bodega',
    margen: 0.32,
    observaciones: '',
    articulos: [
      {
        codigoOracle: 'OR-123',
        descripcion: 'Tóner HP 507A',
        cantidad: 2,
        unidad: 'Unidad',
        precioUnitario: 250000,
      }
    ],
    documentos: {
      ordenProveedor: null,
      ordenCliente: null,
      factura: null,
      rd: 'RD-00045'
    }
  },
    {
    id: 'CP-0002',
    fecha: new Date().toISOString().split('T')[0],
    proveedor: 'DataScan',
    cliente: 'Tecnofar',
    estado: 'Cotización cliente',
    margen: 0.32,
    observaciones: '',
    articulos: [
      {
        codigoOracle: 'OR-123',
        descripcion: 'Etiquetas para impresora Zebra',
        cantidad: 2,
        unidad: 'Unidad',
        precioUnitario: 10
      }
    ],
    documentos: {
      ordenProveedor: null,
      ordenCliente: null,
      factura: null,
      rd: 'RD-00060'
    }
  }
]
