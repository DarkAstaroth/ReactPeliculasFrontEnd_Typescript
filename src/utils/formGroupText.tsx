import { ErrorMessage, Field } from "formik";
import * as React from "react";
import MostrarErrorCampo from "./mostrarErrorCampo";

export default function FormGroupText(props: formGroupTextProps) {
  return (
    <div className="form-group">
      {props.label ? <label htmlFor={props.campo}>Nombre</label> : null}
      <Field
        name={props.campo}
        className="form-control"
        placeholder={props.placeholder}
      />
      <ErrorMessage name={props.campo}>
        {(mensaje) => <MostrarErrorCampo mensaje={mensaje} />}
      </ErrorMessage>
    </div>
  );
}

interface formGroupTextProps {
  campo: string;
  label?: string;
  placeholder?: string;
}
