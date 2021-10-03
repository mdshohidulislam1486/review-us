import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand className='nav-bar' href="#home"><img src={logo} alt="" /></Navbar.Brand>
                <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#courses">Courses</Nav.Link>
                <Nav.Link href="#why">Why us</Nav.Link>
                <Nav.Link href="#about">About us</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;