import CrearActores from "./actores/crearActores";
import EditarActores from "./actores/editarActores";
import IndiceActores from "./actores/indiceActores";
import CrearCines from "./cines/crearCines";
import EditarCines from "./cines/editarCines";
import IndiceCines from "./cines/indiceCines";
import CrearGenero from "./generos/crearGenero";
import EditarGenero from "./generos/editarGenero";
import IndiceGeneros from "./generos/indiceGeneros";
import LandingPage from "./landingPage";
import CrearPeliculas from "./Peliculas/crearPeliculas";
import EditarPeliculas from "./Peliculas/editarPeliculas";
import FiltroPeliculas from "./Peliculas/filtroPeliculas";
import RedireccinarLanding from './utils/redireccionarLanding';

const rutas = [
  {
    path: "/",
    componente: LandingPage,
    exact: true,
  },
  {
    path: "/generos",
    componente: IndiceGeneros,
    exact: true,
  },
  {
    path: "/generos/crear",
    componente: CrearGenero,
  },
  {
    path: "/generos/editar/:id(\\d+)",
    componente: EditarGenero,
  },
  {
    path: "/actores",
    componente: IndiceActores,
    exact: true,
  },
  {
    path: "/actores/crear",
    componente: CrearActores,
  },
  {
    path: "/actores/editar/:id(\\d+)",
    componente: EditarActores,
  },
  {
    path: "/cines",
    componente: IndiceCines,
    exact: true,
  },
  {
    path: "/cines/crear",
    componente: CrearCines,
  },
  {
    path: "/cines/editar/:id(\\d+)",
    componente: EditarCines,
  },
  {
    path: "/peliculas/crear",
    componente: CrearPeliculas,
  },
  {
    path: "/peliculas/editar/:id(\\d+)",
    componente: EditarPeliculas,
  },
  {
    path: "/peliculas/filtro",
    componente: FiltroPeliculas,
  },
  {
    path: "*",
    componente: RedireccinarLanding,
  },
];

export default rutas;
