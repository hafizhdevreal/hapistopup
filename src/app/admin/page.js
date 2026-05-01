export default function Admin() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Dashboard Admin</h1>
        <p>Statistik toko Hapis Topup</p>
      </div>

      <div className="grid">
        <div className="card">
          <h3>Total Order</h3>
          <p>125</p>
        </div>

        <div className="card">
          <h3>Total User</h3>
          <p>58</p>
        </div>

        <div className="card">
          <h3>Pendapatan</h3>
          <p>Rp 2.350.000</p>
        </div>

        <div className="card">
          <h3>Status</h3>
          <p>Online</p>
        </div>
      </div>
    </div>
  );
}