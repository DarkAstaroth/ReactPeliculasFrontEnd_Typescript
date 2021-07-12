import { Link } from "react-router-dom";

export default function IndiceActores() {
    return (
        <>
            <h3>Indice de actores</h3>
            <Link to="/actores/crear">Crear Actor</Link>
        </>
    );
}