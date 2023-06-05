import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NAvbar() {
    console.log(window.scrollY)
    return (
        <div className='contNav'>
            <Navbar collapseOnSelect expand="lg" variant="light" sticky='top'>
                <Container>
                    <Navbar.Brand href="#home"><img src="https://ik.imagekit.io/dqe4fvjcky/logo_SarmgHAQ7.png?updatedAt=1685954719018" height={100} alt='' className='navImg' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#register" style={{ fontSize: "1.5em", marginRight: "1em", fontWeight: "500" }}>Register</Nav.Link>
                            {/* <Nav.Link href="#events" style={{ fontSize: "1.5em", marginRight: "1em" , fontWeight:"500"}}>Events</Nav.Link> */}
                            <Nav.Link href="#partners" style={{ fontSize: "1.5em", fontWeight: "500" }}>Our Partners</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NAvbar