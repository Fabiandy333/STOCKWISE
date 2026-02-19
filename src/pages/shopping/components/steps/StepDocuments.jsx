const StepDocuments = ({ data, role, readOnly }) => {
  return (
    <section>
      <h3>Documentos</h3>

      {data.estado === 'Cotización proveedor' && (
        <p>No se requieren documentos aún</p>
      )}

      {data.estado === 'En proceso de facturación' && (
        <label>
          Orden de compra cliente (PDF)
          <input type="file" accept="application/pdf" disabled={readOnly} />
        </label>
      )}

      {data.estado === 'Finalizado' && (
        <label>
          Factura final (PDF)
          <input type="file" accept="application/pdf" disabled={readOnly} />
        </label>
      )}
    </section>
  )
}

export default StepDocuments
