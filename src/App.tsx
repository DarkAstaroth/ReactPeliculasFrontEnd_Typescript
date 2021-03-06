import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import rutas from "./routerConfig";
import Menu from "./utils/menu";
import configurarValidaciones from './validaciones';

configurarValidaciones();

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="container">
          <Switch>
            {rutas.map((ruta) => (
              <Route
                key={ruta.path}
                path={ruta.path}
                exact={ruta.exact}
                component={ruta.componente}
              />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
