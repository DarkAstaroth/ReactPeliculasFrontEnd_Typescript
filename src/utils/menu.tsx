export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          React Peliculas
        </a>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-5 mb-lg-0">
          <li className="nav-item">
            <a href="/generos" className="nav-link">
              Generos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
