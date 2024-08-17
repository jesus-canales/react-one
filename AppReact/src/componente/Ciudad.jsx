import { Fragment } from "react";
import './estilosCiudad.css'

function Ciudad({ nombre, descripcion, imagen }) {

    return (
        <>
            <div className="ciudad">
                <h3 className="ciudad__titulo">{nombre}</h3>
                <p className="ciudad__descripcion">{descripcion}</p>
                <img src={imagen} alt={nombre} className="ciudad__imagen" />
            </div>
        </>
    );
}

export default Ciudad;