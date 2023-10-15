import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Router, Link, Routes, Navigate } from 'react-router-dom';
import { Route, Switch } from "react-router";
import { Button } from 'bootstrap';
import Login from './Login';
import logo from "../Assets/dustIcon-removebg-preview.png"
import '../../../src/App.css'
const Navigationbar = () => {
  
  return (
    <>
    <div>
    <Navbar expand="lg" className="ml-auto google-text">
      <Container className="">
        <Navbar.Brand className="google-text" style={{color:"black",fontSize:"26px"}} >DustBin Tracker<img className=" mx-2 d-inline"loading="lazy" src={logo}height={50}width={60}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className='right-align' style={{justifyContent:'flex-end'}}>
          <Nav> 
            <Nav.Link className='nav-links' as={Link} to="/" >Home</Nav.Link>
            <Nav.Link className='nav-links' as={Link} to="/login" >Sample</Nav.Link>
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