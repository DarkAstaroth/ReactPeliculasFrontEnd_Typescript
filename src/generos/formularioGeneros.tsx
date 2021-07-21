import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Button from "../utils/button";
import FormGroupText from "../utils/formGroupText";
import { generoCreacionDTO } from "./generosModel";

export default function FormularioGeneros(props: formularioGeneroProps) {
  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .required("Este campo es requerido")
          .primeraLetraMayuscula(),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText campo="nombre" label="Nombre" />
          <Button type="submit" disabled={formikProps.isSubmitting}>
            Salvar
          </Button>
          <Link className="btn btn-secondary" to="/generos">
            Cancelar
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface formularioGeneroProps {
  modelo: generoCreacionDTO;
  onSubmit(
    valores: generoCreacionDTO,
    accion: FormikHelpers<generoCreacionDTO>
  ): void;
}
