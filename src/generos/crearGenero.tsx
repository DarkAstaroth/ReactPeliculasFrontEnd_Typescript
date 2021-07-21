import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Button from "../utils/button";
import FormGroupText from "../utils/formGroupText";

export default function CrearGenero() {
  //   const history = useHistory();

  return (
    <>
      <h3>Crear genero</h3>
      <Formik
        initialValues={{
          nombre: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 100));
          console.log(values);
        }}
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
      {/* <Button onClick={ ()=> history.push('/generos')}>Salvar</Button> */}
    </>
  );
}
