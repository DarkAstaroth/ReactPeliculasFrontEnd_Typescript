import { NavLink } from "react-router-dom";

export default function Menu() {
  const claseActiva = "active";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink
          to="/"
          className="navbar-brand"
          activeClassName={claseActiva}
        >
          React Peliculas
        </NavLink>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-5 mb-lg-0">
          <li className="nav-item">
            <NavLink
              to="/generos"
              className="nav-link"
              activeClassName={claseActiva}
            >
              Generos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
