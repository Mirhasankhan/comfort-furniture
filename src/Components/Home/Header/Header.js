import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../Images/logo-1.png';
import './Header.css';

const Header = () => {
    return (
        <div>
        <Navbar expand="lg">
            <Container>
                <img className="m-3" src={logo} alt=""/>
                <Navbar.Brand href="#home">COMFORT <strong style={{color: 'orange'}}>+</strong> <br/>FURNITURE COMPANY</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav-header">
                        <Nav.Link href="#home" className="nav-hovers">Home</Nav.Link>                        
                        <NavDropdown title="PAGES" id="basic-nav-dropdown"  className="nav-hovers">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link"  className="nav-hovers">SHOP</Nav.Link>
                        <Nav.Link href="#link"  className="nav-hovers">SERVICES</Nav.Link>
                        <Nav.Link href="#link"  className="nav-hovers">BLOG</Nav.Link>
                        <Nav.Link href="#link"  className="nav-hovers">CONTACTS</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    );
};

export default Header;