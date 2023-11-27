import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap'; 


class Navigation extends React.Component{
  render(){
    return (
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Navigation
