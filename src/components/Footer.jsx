import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center '>
      <div footer d-flex align-items-center justify-content-evenly>
      <div className='d-flex justify-content-evenly align-items-center mt-3' >
          <Navbar.Brand href="#home" style={{textDecoration:"none",colour:"white",fontSize:"20px"}}>
          <Link to='/' style={{textDecoration:'none',color:'white'}}>
            <img
              alt=""
              src="https://eventsmanagementkerala.com/wp-content/uploads/2022/08/ISO_90012008_certified_company__1_-removebg-preview.webp"
              width="150"
              height="100"
              className="d-inline-block align-top  "
            />{' '}
            </Link>
            
          </Navbar.Brand>
          </div>
      
      <div  className='ms-2'>
        <div className='d-flex justify-content-evenly align-items-center mt-3'> 
        <Link style={{textDecoration:'none',color:'white'}}>
        <i class="fa-brands fa-instagram fa-1x"></i>
        </Link>
        <Link style={{textDecoration:'none',color:'white'}}>
        <i class="fa-brands fa-facebook fa-1x"></i>
        </Link>
        <Link style={{textDecoration:'none',color:'white'}}>
        <i class="fa-brands fa-twitter fa-1x"></i>
        </Link>
        <Link style={{textDecoration:'none',color:'white'}}>
        <i class="fa-brands fa-reddit fa-1x"></i>
        </Link>
        </div>
        </div>
    <div style={{width:'500px',fontSize:'12px'}}>
     <p  className='textstyle mt-4' style={{textAlign:'justify'}}>Planning an event has never been easier! Melodia® Events is an ISO 9001:2015 Certified Event Management Company based in Kerala, India, offering various services to make your events stress-free and memorable. From premium corporate events and wedding planning to small-scale birthday parties, you can be sure we have it all covered. With offices in Kochi, Thrissur, and Calicut, we specialize in weddings, events, parties, and occasions specifically for Keralites and Malayalees.</p>
     </div>
     <div className='d-flex justify-content-center align-items-center'>
    <div className='footer d-flex align-items-center justify-content-evenly'>
     <div className='d-flex flex-column '>
      <h4  className='textstyle'>Quick Links</h4>
      <Link to='/'style={{textDecoration:'none',color:'white'}}>
      Home
      </Link>
      <Link  to='/aboutus'style={{textDecoration:'none',color:'white'}} >
      About
      </Link>
     
      <Link to='/landingpage'style={{textDecoration:'none',color:'white'}}>
      Contact
      </Link>
     </div>
     <div className='d-flex flex-column ms-5'>
      <h4  className='textstyle'>Services</h4>
       <Link  to='/landingpage'style={{textDecoration:'none',color:'white'}} >
      Let's Talk
      </Link>
      <Link to='/venues'style={{textDecoration:'none',color:'white'}}>
      Venues
      </Link>
      <Link to='/landingpage'style={{textDecoration:'none',color:'white'}}>
      Contact
      </Link>
      
     </div>
    
       </div>
       </div>
       <div className='d-flex justify-content-evenly align-items-center mt-3' >
        <p className='textstyle'><i class="fa-solid fa-phone me-3 fa-1x"></i>+91-859 -001-8811</p>
         <p className='textstyle ms-4'><i class="fa-solid fa-envelope me-3 fa-1x"></i>melodiaeventmanagement@gmail.com</p>
       </div>
      </div>

    </div>
  )
}

export default Footer