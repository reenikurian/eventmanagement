import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Home() {
  return (
    
    <>
    
    <div className = "head-text">
        <div className = "head-image">
          <img src = "https://www.ciquk.org/wp-content/uploads/2017/09/wedding-event-1.jpg" alt = "" height="600px" width="100%" />
        </div>
        <div className="center__text ms-7">
          <h5> TAKE A TRIP INTO PARADISE </h5>
          <p> Partner with Melodia Event Management in Kerala </p>
          <h7>ISO 9001:2015 certified company</h7>
          <Link to='/landingpage' >
          <button className='btn btn-primary d-flex mt-2 ms-3'>Let's Talk</button>
          </Link>
         
        </div>
      </div>
    
   
    <div>
         <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly w-100'>
        <Row>
             <Col>
              <h8 className='textstyle '> <span className='text-warning'>MELODIA EVENTS - an ISO 9001:2015 certified company</span> </h8>
              <h3 className='textstyle mt-4'>Looking for the Most Creative & Innovative Event Planners in Kerala? </h3>
              <p className='textstyle mt-3' style={{textAlign:'justify'}}>What’s better than celebrating the most special events of your life journey without worrying about a single thing?
              Melodia Events is here to make your dream events come true! Our team of the best event management professionals in Kochi, Thrissur, and Calicut uses creative and innovative ways to plan and curate the perfect, hassle-free event celebrations that are bound to enthrall your attendees.</p>
             </Col>
             <Col>
             <div className=''>
             <input type="text"  id='' className='form-control mt-12' placeholder='Enter your Full Name'/>
             <input type="text"  id='' className='form-control mt-3' placeholder='Enter your Phone Number'/>
             <input type="text"  id='' className='form-control mt-3' placeholder='Enter your Email Id'/>
             <input type="text"  id='' className='form-control mt-3' placeholder='Message'/>
             <button className='btn btn-warning mt-4'>SUBMIT</button>
             </div>
             </Col>
        </Row>
   </Container>
    </div>
    </>
    
  )
}

export default Home