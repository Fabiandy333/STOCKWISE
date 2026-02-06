import { useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import './MyKeys.css'

const mockData = [
 {
    id: '4',
    account: 'HP Smart Device Services',
    url: 'https://hp-sds-latam.insightportal.net/PortalWeb/login',
    username: 'fabcampe',
    password: '********',
    securityAnswer: 'N/A',
    notes: 'Cuenta usuario',
    updatedAt: '2026-02-06'
  }

]

const MyKeys = () => {
  const [keys, setKeys] = useState(mockData)

  const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value)
  }

  return (
    <MainLayout>
        <div className="mykeys-page">
      <div className="mykeys-header">
        <h2>Mis Claves</h2>
        <button className="add-btn">+ Nueva Clave</button>
      </div>

      <div className="table-wrapper">
        <table className="table">
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
                    onClick={() => copyToClipboard(item.password)}
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
    </MainLayout>
  )
}

export default MyKeys
