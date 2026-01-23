import MainLayout from "../../components/layout/MainLayout";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="dashboard-grid">

        <div className="card">
          <h4>Tóner en Stock</h4>
          <h2>1,245</h2>
          <span className="positive">+5% este mes</span>
        </div>

        <div className="card">
          <h4>Tóner Consumidos</h4>
          <h2>432</h2>
        </div>

        <div className="card">
          <h4>Pedidos Activos</h4>
          <h2>12</h2>
        </div>

        <div className="card">
          <h4>Impresoras con alerta</h4>
          <h2>3</h2>
        </div>

      </div>
    </MainLayout>
  );
}
