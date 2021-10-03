import React from 'react'
import CartWidget from './NavBar/CartWidget'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'


function NavBar (props) {

    const {cantidad} = props

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                        <Link exact to="/">
                            <Navbar.Brand href="#home">aMAR </Navbar.Brand>
                        </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link exact to="/">
                                <Nav.Link href="#home" >Inicio</Nav.Link>
                            </Link>
                            <Nav.Link>Dónde estamos?</Nav.Link>
                                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                                    <Link exact to="/categoria/tartas">
                                        <NavDropdown.Item href="#action/3.1">Tartas</NavDropdown.Item>
                                    </Link>
                                    <Link exact to="/categoria/tortas">
                                        <NavDropdown.Item href="#action/3.2">Tortas</NavDropdown.Item>
                                    </Link>
                                    <NavDropdown.Item href="#action/3.3">Pattiserie</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Alfajores</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.5">Cookies</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.6">Budines</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.7">Bombones</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.8">Macarons</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                </NavDropdown>
                                <CartWidget count={cantidad}/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
