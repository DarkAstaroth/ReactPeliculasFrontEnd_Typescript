import { Field, Form, Formik } from "formik";
import { Link, useHistory } from "react-router-dom";
import Button from '../utils/button';

export default function CrearGenero() {
    
    const history = useHistory();

    return (
        <>
            <h3>Crear genero</h3>
            <Formik
                initialValues={{
                    nombre: ""
                }}

                onSubmit={values => {
                    console.log(values)
                }}
            >
                <Form>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <Field name="nombre" className="form-control"/>
                    </div>

                    <Button type="submit">Salvar</Button>
                    <Link className="btn btn-secondary" to ="/generos">Cancelar</Link>
                </Form>
            </Formik>
            {/* <Button onClick={ ()=> history.push('/generos')}>Salvar</Button> */}
        </>
    );
}