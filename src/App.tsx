import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import IndiceGeneros from "./generos/indiceGeneros";
import LandingPage from './landingPage';
import Menu from "./utils/menu";

function App() {


  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/generos">
              <IndiceGeneros />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
