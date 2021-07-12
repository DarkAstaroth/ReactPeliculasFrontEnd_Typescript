import IndiceGeneros from "./generos/indiceGeneros";
import LandingPage from "./landingPage";
const rutas = [
  {
    path: "/",
    componente: LandingPage,
    exact: true,
  },
  {
    path: "/generos",
    componente: IndiceGeneros,
  },
];

export default rutas;
