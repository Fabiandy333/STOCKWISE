import { useState } from 'react'
import './MyKeys.css'

const mockData = [
  {
    id: '1',
    account: 'HP Smart Device Services',
    url: 'https://sds.hp.com',
    username: 'admin_hp',
    password: '********',
    securityAnswer: 'Primer carro',
    notes: 'Cuenta principal',
    updatedAt: '2025-01-12'
  }
]

const MyKeys = () => {
  const [keys, setKeys] = useState(mockData)

  const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value)
  }

  return (
    <div className="mykeys-page">
      <div className="mykeys-header">
        <h2>Mis Claves</h2>
        <button className="add-btn">+ Nueva Clave</button>
      </div>

      <div className="table-wrapper">
        <table className="inventory-table mykeys-table">
          <thead>
            <tr>
              <th>Cuenta</th>
              <th>Enlace</th>
              <th>Usuario</th>
              <th>Contraseña</th>
              <th>Respuesta Seguridad</th>
              <th>Notas</th>
              <th>Actualizado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {keys.map((item) => (
              <tr key={item.id}>
                <td>{item.account}</td>

                <td>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    Abrir
                  </a>
                </td>

                <td>
                  {item.username}
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard(item.username)}
                  >
                    📋
                  </button>
                </td>

                <td>
                  ********
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard('PASSWORD_REAL')}
                  >
                    📋
                  </button>
                </td>

                <td>
                  {item.securityAnswer}
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard(item.securityAnswer)}
                  >
                    📋
                  </button>
                </td>

                <td>{item.notes}</td>
                <td>{item.updatedAt}</td>

                <td className="actions">
                  <button className="edit">✏️</button>
                  <button className="delete">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyKeys
