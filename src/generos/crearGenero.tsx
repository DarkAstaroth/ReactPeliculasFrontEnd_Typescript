import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Button from "../utils/button";
import FormGroupText from "../utils/formGroupText";
import FormularioGeneros from "./formularioGeneros";

export default function CrearGenero() {
  //   const history = useHistory();

  return (
    <>
      <h3>Crear genero</h3>
      <FormularioGeneros
        modelo={{ nombre: "" }}
        onSubmit={async (valores) => {
          await new Promise((r) => setTimeout(r, 3000));
          console.log(valores);
        }}
      />
      {/* <Button onClick={ ()=> history.push('/generos')}>Salvar</Button> */}
    </>
  );
}
