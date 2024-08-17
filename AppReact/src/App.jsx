import { Fragment } from "react";
import Menu from './componente/Menu'
import Pie from './componente/Pie'
import Ciudad from "./componente/Ciudad";

function App() {

  return (
    <>
      <Menu />
      <Ciudad
      nombre="Lima"
      descripcion="Capital del Perú"
      imagen= "https://www.peru.travel/Contenido/General/Imagen/es/643/1.1/lima-plaza-de-armas-consejos.jpg" />
      <Pie />
    </>
  );
}

export default App;