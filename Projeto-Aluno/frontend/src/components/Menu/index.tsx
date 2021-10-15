import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
    return(
        <Navbar bg="primary" expand="lg" variant = "dark">
            <Container>
                <Navbar.Brand as = {Link} className = "nav-Item" to = "/">
                    <img 
                        src="https://www.unip.br/assets/img/logo/logo-unip.svg"
                        width="100"
                        height="40"
                        className="d-inline-block align-top"
                        alt="CadAluno"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as = {Link} className = "nav-Item" to = "/">Inicio</Nav.Link>
                        <Nav.Link as = {Link} className = "nav-Item" to = "/Alunos">Alunos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;