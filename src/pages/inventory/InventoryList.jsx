import { useState } from 'react'
import React from 'react'
import MainLayout from '../../components/layout/MainLayout'
import './InventoryList.css'

const InventoryList = () => {

  const [sortConfig, setSortConfig] = useState({
  key: null,
  direction: 'asc'
})

const handleSort = (key) => {
  setSortConfig((prev) => ({
    key,
    direction:
      prev.key === key && prev.direction === 'asc'
        ? 'desc'
        : 'asc'
  }))
}
  return (
    <MainLayout>
      <div className="inventory-page">
        <h2 className="inventory-title">Inventario de Impresoras</h2>

        <div className="table-wrapper">
          <table className="table">
            <thead>
              {/* FILA DE TÍTULOS */}
              <tr>
                <th onClick={() => handleSort('serial')}>
                  Serial {sortConfig.key === 'serial' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('tipoCI')}>
                  Tipo CI {sortConfig.key === 'tipoCI' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('nombre')}>
                  Nombre Dispositivo {sortConfig.key === 'nombre' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('conexion')}>
                  Tipo Conexión {sortConfig.key === 'conexion' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('ip')}>
                  IP {sortConfig.key === 'ip' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('mac')}>
                  MAC {sortConfig.key === 'mac' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('sede')}>
                  Sede {sortConfig.key === 'sede' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('edificio')}>
                  Edificio {sortConfig.key === 'edificio' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('area')}>
                  Área {sortConfig.key === 'area' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('departamento')}>
                  Departamento {sortConfig.key === 'departamento' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('ciudad')}>
                  Ciudad {sortConfig.key === 'ciudad' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('direccion')}>
                  Dirección {sortConfig.key === 'direccion' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('marca')}>
                  Marca {sortConfig.key === 'marca' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('modelo')}>
                  Modelo {sortConfig.key === 'modelo' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('color')}>
                  Color / BN {sortConfig.key === 'color' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('firmware')}>
                  Firmware {sortConfig.key === 'firmware' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('asignacion')}>
                  Asignación {sortConfig.key === 'asignacion' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('estado')}>
                  Estado CI {sortConfig.key === 'estado' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('densidad')}>
                  Densidad Tóner {sortConfig.key === 'densidad' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('obsdensidad')}>
                  Obs. Densidad {sortConfig.key === 'obsdensidad' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('observacion')}>
                  Observación {sortConfig.key === 'observacion' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('fecha')}>
                  Última Confirmación {sortConfig.key === 'fecha' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>

                <th onClick={() => handleSort('analista')}>
                  Analista {sortConfig.key === 'analista' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>
              </tr>


              {/* FILA DE FILTROS */}
              <tr className="filters-row">
                <th><input placeholder="Buscar..." /></th>
                <th><input placeholder="Tipo" /></th>
                <th><input placeholder="Nombre" /></th>
                <th><input placeholder="Conexión" /></th>
                <th><input placeholder="IP" /></th>
                <th><input placeholder="MAC" /></th>
                <th><input placeholder="Sede" /></th>
                <th><input placeholder="Edif." /></th>
                <th><input placeholder="Área" /></th>
                <th><input placeholder="Depto" /></th>
                <th><input placeholder="Ciudad" /></th>
                <th><input placeholder="Dirección" /></th>
                <th><input placeholder="Marca" /></th>
                <th><input placeholder="Modelo" /></th>
                <th><input placeholder="Color" /></th>
                <th><input placeholder="FW" /></th>
                <th><input placeholder="Asignación" /></th>
                <th><input placeholder="Estado" /></th>
                <th><input placeholder="%" /></th>
                <th><input placeholder="Obs. Densidad" /></th>
                <th><input placeholder="Observación" /></th>
                <th><input placeholder="Fecha" /></th>
                <th><input placeholder="Analista" /></th>
              </tr>
            </thead>

            <tbody>
              {/* 🔹 FILAS DINÁMICAS IRÁN AQUÍ */}
              <tr>
                <td>CNB123456</td>
                <td>MFP</td>
                <td>HP-MFP-ADMIN</td>
                <td>Red</td>
                <td>192.168.1.25</td>
                <td>00:1A:2B:3C</td>
                <td>Planta Norte</td>
                <td>A</td>
                <td>Producción</td>
                <td>TI</td>
                <td>Cali</td>
                <td>Cra 10 #20-30</td>
                <td>HP</td>
                <td>E58650</td>
                <td>Color</td>
                <td>1.2.3</td>
                <td>Cliente</td>
                <td className="status-active">Activo</td>
                <td>5%</td>
                <td>Normal</td>
                <td>Equipo estable</td>
                <td>12/01/2025</td>
                <td>Fabian Camayo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  )
}

export default InventoryList

