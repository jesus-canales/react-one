import { Fragment } from "react";
import Contador from './componentes/Contador'
import Acordion from "./componentes/Acordion";
import Carrusel from './componentes/Carrusel';
import Formulario from './componentes/Formulario'

function App(){
  return(
    <>
    <Carrusel />
    <Contador />
    <Formulario />
    <Acordion />
    </>
  );
}

export default App;