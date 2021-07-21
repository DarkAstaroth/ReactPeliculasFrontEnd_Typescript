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
