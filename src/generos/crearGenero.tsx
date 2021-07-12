import { useHistory } from "react-router-dom";
import Button from "../utils/button";

export default function CrearGenero() {
    
    const history = useHistory();

    return (
        <>
            <h3>Crear genero</h3>
            <Button onClick={ ()=> history.push('/generos')}>Salvar</Button>
        </>
    );
}