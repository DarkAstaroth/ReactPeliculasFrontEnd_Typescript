import { Pelicula } from "./peliculas.model";
import PeliculaIndividual from "./peliculaIndividual";
import Cargando from "../utils/cargando";
import css from "./listadoPeliculas.module.css";
import ListadoGenerico from "../utils/listadoGenerico";

export default function ListadoPeliculas(props: listadoPeliculasProps) {
  return (
    <ListadoGenerico listado={props.peliculas}>
      <div className={css.div}>
        {props.peliculas?.map((pelicula) => (
          <PeliculaIndividual pelicula={pelicula} key={pelicula.id} />
        ))}
      </div>
    </ListadoGenerico>
  );
}

interface listadoPeliculasProps {
  peliculas?: Pelicula[];
}
