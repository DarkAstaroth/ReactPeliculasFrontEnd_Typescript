import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Pelicula } from "./Peliculas/peliculas.model";
import PeliculaIndividual from "./Peliculas/PeliculaIndividual";

function App() {
  
  const peliculaPrueba: Pelicula = {
    id: 1,
    titulo: "Spider-man",
    poster:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spiderman-homecoming-poster-1551691492.jpg",
  };

  return (
    <>
      <PeliculaIndividual pelicula={peliculaPrueba} />
    </>
  );
}

export default App;
