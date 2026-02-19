export default function StepDocuments({ data, role }) {
  const estado = data.estado

  return (
    <section>
      <h3>Documentos</h3>

      {estado === 'En Bodega Carvajal' && (
        <div>
          <label>RD generado</label>
          <input value={data.documentos.rd} disabled />
        </div>
      )}

      {estado === 'En proceso de facturación' && (
        <label>
          Orden compra cliente
          <input type="file" accept="application/pdf" />
        </label>
      )}

      {estado === 'Finalizado' && role === 'gerente' && (
        <label>
          Factura (PDF)
          <input type="file" accept="application/pdf" />
        </label>
      )}
    </section>
  )
}