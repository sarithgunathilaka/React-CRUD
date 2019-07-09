import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { Button, Navbar, Nav } from 'react-bootstrap';


export default class Navigation extends Component {
  render() {
   
    return (
         
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Yukon App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/students">Students</Nav.Link>
              <Nav.Link href="/test">Test</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
                
            
    )
  }
}
