import { Fragment, useState } from "react";
import { Button, Form } from 'react-bootstrap';

const Formulario = () => {
    const [ nombre, setNombre ] = useState('');
    const [ apellidos, setApellidos ] = useState('');
    const [ celular, setCelular ] = useState('');
    const [ lugar, setLugar ] = useState('');
    const [ errors, setErrors] = useState({});

    const regexTexto = /^[a-zA-ZÁÉÍÓÚñ\s]+$/;
    const regexNumero = /^[0-9]{1,9}$/;

    const realizarEnvio = (e) => {
        e.preventDefault();
        const newErrors = {};
        if(!nombre) newErrors.nombre = 'El nombre es obligatorio';
        if(!apellidos) newErrors.apellidos = 'Los apellidos son obligatorio';
        if(!celular) newErrors.celular = 'El celular es obligatorio';
        if(!lugar) newErrors.lugar = 'El Lugar es obligatorio';
        if(!regexTexto.test(nombre)) {alert('El nombre no es válido')};
        if(!regexTexto.test(apellidos)) {alert('Los apellidos no son válidos')};
        if(!regexNumero.test(celular)) {alert('Celular no válido')};
        if(!regexTexto.test(lugar)) {alert('El lugar ingresado no es válido')};
        setErrors(newErrors);
        alert(`Datos ingresados: { ${nombre}, ${apellidos}, ${celular}, ${lugar} }`);
    }

    const cambioNombre = (e)=> setNombre(e.target.value);
    const cambioApellido = (e)=> setApellidos(e.target.value);
    const cambioCelular = (e) => setCelular(e.target.value);
    const cambioLugar = (e) => setLugar(e.target.value);

    return (
        <>
        <Form onSubmit={realizarEnvio}>
            <Form.Group>
                <Form.Control type="text" value={nombre} onChange={cambioNombre}   placeholder="Ingrese nombre"></Form.Control>
                <Form.Control type="text" value={apellidos} onChange={cambioApellido} placeholder="Ingrese apellidos"></Form.Control>
                <Form.Control type="text" value={celular}  onChange={cambioCelular} placeholder="Ingrese celular"></Form.Control>
                <Form.Control type="text"  value={lugar}  onChange={cambioLugar} placeholder="Ingrese lugar de procedencia"></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" >Enviar datos</Button>
        </Form>
        </>
    );
}

export default Formulario;