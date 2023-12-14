import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap'; 


class Navigation extends React.Component{
  render(){
    return (
      <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary"> >
        <Container>
          <Navbar.Brand as={Link} to={'/'}>Laviel</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={'quotes'}>Random Quotes</Nav.Link>
              <Nav.Link as={Link} to={'markdown'}>Markdown</Nav.Link>
              <Nav.Link as={Link} to={'drum'}>Drum</Nav.Link>
              <Nav.Link as={Link} to={'calculator'}>Calculator</Nav.Link>
              <Nav.Link as={Link} to={'clock'}>Clock</Nav.Link>
              <Nav.Link as={Link} to={'guess'}>Guessing Game</Nav.Link>
              <Nav.Link as={Link} to={'dice'}>Dice Roll</Nav.Link>
              <Nav.Link as={Link} to={'boxes'}>Colored Boxes</Nav.Link>
              <Nav.Link as={Link} to={'lightsout'}>Lights Out</Nav.Link>
              <Nav.Link as={Link} to={'todo'}>Todo List</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Navigation
