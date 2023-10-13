import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComp = () => {

    const [ changeColor, setChangeColor ] = useState(false);

    const changeBackgroundColor = () => {
        if (window.scrollY > 200) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    useEffect(() => {
        changeBackgroundColor();
    })

  return (
        <div className='sticky-top'>
            <Navbar expand="lg" variant='dark' className={changeColor ? "color-active" : ""}>
                <Container>
                    <Navbar.Brand href="#home" className='fw-bold fs-5'>The Red</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <Nav.Link href="#home" className='fw-bold mx-2'>Home</Nav.Link>
                                    <Nav.Link href="#link" className='fw-bold mx-2'>Gallery</Nav.Link>
                                    <Nav.Link href="#link" className='fw-bold mx-2'>services</Nav.Link>
                                    <Nav.Link href="#link" className='fw-bold mx-2'>Faq</Nav.Link>
                                </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComp;