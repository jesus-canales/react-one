import { Fragment } from "react";
import { Button, Form} from 'react-bootstrap';

const Formulario = () => {
    return (
        <>
        <Form>
            <Form.Group>
                <Form.Label>Formulario de Datos</Form.Label>
                <Form.Control type="text" placeholder="Ingrese nombre"></Form.Control>
                <Form.Control type="text" placeholder="Ingrese apellidos"></Form.Control>
                <Form.Control type="text" placeholder="Ingrese celular"></Form.Control>
                <Form.Control type="text" placeholder="Ingrese lugar de procedencia"></Form.Control>
            </Form.Group>
            <Button>Enviar datos</Button>
        </Form>
        </>
    );
}

export default Formulario;