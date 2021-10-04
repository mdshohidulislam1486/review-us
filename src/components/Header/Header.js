import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div> 
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand className='nav-bar' href="#home"><img src={logo} alt="" /></Navbar.Brand>
                <Nav className="ms-auto">
                <Nav.Link href="#home"><Link className='header-nav text-light' to='/home'>Home</Link></Nav.Link>
                <Nav.Link href="#courses"><Link className='header-nav text-light' to='/courses'>Courses</Link></Nav.Link>
                <Nav.Link href="#why"><Link className='header-nav text-light' to='/whyus'>Why us</Link></Nav.Link>
                <Nav.Link href="#about"><Link className='header-nav text-light' to='/about'>About</Link></Nav.Link>
                </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;