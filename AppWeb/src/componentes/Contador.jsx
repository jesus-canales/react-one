import { Fragment, useState } from "react";

function Contador() {
    const [ contar, setContar ] = useState(0);
    const hacerClic = () => {
        setContar( contar + 1 );
    }

    return (
        <>
            <p>El número de clic realizados es: { contar }</p>
            <button onClick={hacerClic}>Click aquí</button>
        </>
    );
}

export default Contador;