//  tsrsfc

import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Nav, Navbar } from 'react-bootstrap';

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="info" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">BiB</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">Ver Libro</Nav.Link>
                        <Nav.Link href="#pricing">Registro de estudiante</Nav.Link>
                        <Nav.Link href="#pricing">Registro de libro</Nav.Link>
                        <Nav.Link href="#pricing">Cerrar Sesión</Nav.Link>                    
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default ColorSchemesExample;