import ListadoGenerico from "../utils/listadoGenerico";
import css from "./listadoPeliculas.module.css";
import PeliculaIndividual from "./peliculaIndividual";
import { Pelicula } from "./peliculas.model";

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
