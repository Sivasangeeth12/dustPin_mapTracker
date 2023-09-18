import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Router, Link, Routes, Navigate } from 'react-router-dom';
import { Route, Switch } from "react-router";
import { Button } from 'bootstrap';
import Login from './Login';

const Navigationbar = () => {
  return (
    <>
    <div>
    <Navbar expand="lg" className="bg-body-tertiary ml-auto">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className='right-align' style={{justifyContent:'flex-end'}}>
          <Nav> 
            <Nav.Link href="#home" style={{paddingLeft:"50px"}} >Home</Nav.Link>
            <Nav.Link active as={Link} to="/login" >Sample</Nav.Link>
            <Nav.Item className="ml-auto" ><Login/></Nav.Item>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
    <div>
    </div>
    </>
  )
}

export default Navigationbar