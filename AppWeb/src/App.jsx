import { Fragment } from "react";
import Contador from './componentes/Contador'
import Acordion from "./componentes/Acordion";
import Carrusel from './componentes/Carrusel';
import Formulario from './componentes/Formulario'
import Listado from "./componentes/Listado";

function App(){
  return(
    <>
    <Carrusel />
    <Contador />
    <Formulario />
    <Acordion />
    <br />
    <br />
    <Listado />
    <br />
    <br />
    </>
  );
}

export default App;