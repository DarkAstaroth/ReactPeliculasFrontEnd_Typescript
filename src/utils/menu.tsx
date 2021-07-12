import { NavLink } from "react-router-dom";

export default function Menu() {
  const claseActiva = "active";

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand" activeClassName={claseActiva}>
          React Peliculas
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                to="/generos"
                className="nav-link"
                activeClassName={claseActiva}
              >
                Generos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/peliculas/filtro"
                className="nav-link"
                activeClassName={claseActiva}
              >
                Filtrar peliculas
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/actores"
                className="nav-link"
                activeClassName={claseActiva}
              >
                Actores
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/cines"
                className="nav-link"
                activeClassName={claseActiva}
              >
                Cines
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/generos"
                className="nav-link"
                activeClassName={claseActiva}
              >
                Generos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/peliculas/crear"
                className="nav-link"
                activeClassName={claseActiva}
              >
                Crear Peliculas
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
