import { Fragment } from "react";
import Formulario from './componente/Formulario'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <div className="container container-fluid">
        <br />
        <br />
        <h1>Ingreso de Datos</h1>
        <Formulario />
      </div>
    </>
  );
}

export default App;