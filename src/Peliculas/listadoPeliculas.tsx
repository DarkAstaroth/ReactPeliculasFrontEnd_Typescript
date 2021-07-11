import { Pelicula } from "./peliculas.model";
import PeliculaIndividual from "./peliculaIndividual";
import Cargando from "../utils/cargando";
import css from "./listadoPeliculas.module.css";

export default function ListadoPeliculas(props: listadoPeliculasProps) {

  if (!props.peliculas) {
    return <><Cargando /></>;
  } else if (props.peliculas.length === 0) {
    return <>No hay elementos para mostrar</>;
  } else {
    return (
      <div className={css.div}>
        {props.peliculas.map((pelicula) => (
          <PeliculaIndividual pelicula={pelicula} key={pelicula.id} />
        ))}
      </div>
    );
  }
}

interface listadoPeliculasProps {
  peliculas?: Pelicula[];
}
