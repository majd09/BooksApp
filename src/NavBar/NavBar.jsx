import React from "react";
import {Navbar,Container,Nav,FormControl}from 'react-bootstrap';

const NavBar=()=>{

    return (
        <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
        <Container>
        <Nav className="me-auto  ">
        
                        <a href ='/admin/books' style={{ textDecoration: 'none' }}>
                        <p style={{ color: "white", padding:'15px' }}> Admin </p>
                        </a>
                    
                    
                </Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <FormControl
                    type="search"
                    placeholder="search"
                    className="me-2 w-100 text-center"
                    aria-label="Search"
                />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Nav className="me-auto  ">
        
        <a href ='/books' style={{ textDecoration: 'none' }}>
        <p style={{ color: "white", padding:'15px' }}> Home </p>
        </a>
    
    
</Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    )


}

export default NavBar;