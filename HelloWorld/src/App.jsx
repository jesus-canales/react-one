import { Fragment } from "react";
import HolaMundo from "./componentes/HolaMundo";
import Mensaje from "./componentes/Mensaje";

function App() {

  return (
    <>
      <div>
        <Mensaje />
        <HolaMundo />
        <Mensaje />
        <HolaMundo />
      </div>
    </>
  );
}

export default App;