import React, { useEffect, useState } from "react";
import "./App.css";
import { LandingPageDTO } from "./Peliculas/peliculas.model";
import ListadoPeliculas from "./Peliculas/listadoPeliculas";
import Button from "./utils/button";

function App() {
  const [peliculas, setPeliculas] = useState<LandingPageDTO>({});

  useEffect(() => {
    const timeId = setTimeout(() => {
      setPeliculas({
        enCartelera: [
          {
            id: 1,
            titulo: "Spider-man",
            poster:
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spiderman-homecoming-poster-1551691492.jpg",
          },
          {
            id: 2,
            titulo: "Doctor Strange",
            poster:
              "https://images-na.ssl-images-amazon.com/images/I/71gyLVWIfIL._AC_SL1032_.jpg",
          },
        ],
        ProximosEstrenos: [
          {
            id: 1,
            titulo: "Loki la serie",
            poster:
              "http://oyster.ignimgs.com/wordpress/stg.ign.com/2021/05/Loki_Digital_KeyArt_Payoff_v5_lg.jpg",
          },
        ],
      });
    }, 500);

    return () => clearTimeout(timeId);
  }, []);

  return (
    <>
      <div className="container">
        <Button>Mi componente Boton</Button>
        <h3>En Cartelera</h3>
        <ListadoPeliculas peliculas={peliculas.enCartelera} />
        <h3>Proximos Estrenos</h3>
        <ListadoPeliculas peliculas={peliculas.ProximosEstrenos} />
      </div>
    </>
  );
}

export default App;
