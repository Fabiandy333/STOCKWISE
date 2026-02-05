import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} Carvajal Soluciones de Comunicación
      </span>

      <span className="footer-separator">•</span>

      <span>
        Desarrollado por <strong>Fabian Andres Camayo Pesas</strong>
      </span>
    </footer>
  )
}
