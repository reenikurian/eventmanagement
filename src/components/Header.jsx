import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
      <div>
         <Navbar className="bg-light ">
        <Container>
          <Navbar.Brand href="#home" style={{textDecoration:"none",colour:"white",fontSize:"20px"}}>
          <Link to='/' style={{textDecoration:'none',color:'white'}}>
          <i class="fa-brands fa-elementor text-light me-3 fa-2x"></i>
            <img
              alt=""
              src="https://eventsmanagementkerala.com/wp-content/uploads/2022/08/ISO_90012008_certified_company__1_-removebg-preview.webp"
              width="130"
              height="80"
              className="d-inline-block align-top  "
            />{' '}
            </Link>
            
          </Navbar.Brand>
          
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='d-flex justify-content-center align-items-center' fluid>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            
          >
            <Link to='/'className='textstyle me-3' style={{textDecoration:'none',color:'black',fontSize:'18px'}} >Home</Link>
            <Link to='/aboutus' className='textstyle me-3'style={{textDecoration:'none',color:'black',fontSize:'18px'}} >About Us</Link>
            <Link to='/venues'className='textstyle me-3' style={{textDecoration:'none',color:'black',fontSize:'18px'}} >Wedding venues</Link>
            <Link to='/landingpage' className='textstyle me-3' style={{textDecoration:'none',color:'black',fontSize:'18px'}} >Let's Talk</Link>
            
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
        </Container>
      </Navbar>
    </div>
   
    
    </>
  
  )
}

export default Header