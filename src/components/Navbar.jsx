import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../img/logo.png'

function NAvbar() {
    console.log(window.scrollY)
    return (
        <div className='contNav'>
            <Navbar collapseOnSelect expand="lg" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} height={100} className='navImg'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#features" style={{ fontSize: "1.5em", marginRight: "1em" , fontWeight:"500"}}>Features</Nav.Link>
                            <Nav.Link href="#pricing" style={{ fontSize: "1.5em", marginRight: "1em" , fontWeight:"500"}}>Pricing</Nav.Link>
                            <Nav.Link href="#deets" style={{ fontSize: "1.5em" , fontWeight:"500"}}>More deets</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NAvbar