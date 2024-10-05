import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


function Landingpage() {
  return (
    <>
     <div className = "head-text">
    <div className = "head-image">
      <img src = "https://images.unsplash.com/photo-1511578314322-379afb476865?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3MlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D" alt = "" height="600px" width="100%" />
    </div>
    <div className="center__textstatus ms-7">
      <h5  style={{fontSize:"35px "}}> Contact Us </h5>
      <h7 style={{fontSize:"25px "}}>  Need help planning your next event? Look no further than Melodia Event Management Kerala! </h7>
      <h6 style={{fontSize:"25px "}}>We can provide everything you need to ensure your event is a success. </h6>
      
    </div>
  </div>

   
  <div>
         <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly w-100'>
        <Row>
             <Col>
              <h8 className='textstyle 'style={{fontSize:"18px "}}> <span className='text-warning'>Want to Work with Us?</span> </h8>
              
              <h3 className='textstyle  mt-4' style={{fontSize:"15px "}}><i class="fa-solid fa-phone me-3 fa-2x"></i>Talk to Our Client Support Team </h3>
              <h7 className='textstyle  me-3 ' style={{fontSize:"18px "}}>+91-859 -001-0011</h7>
              <h3 className='textstyle mt-4' style={{fontSize:"15px "}}><i class="fa-solid fa-envelope me-3 fa-2x"></i>Write to us about your needs </h3>
              <h7 className='textstyle  me-3' style={{fontSize:"18px "}}>melodiaeventmanagement@gmail.com1</h7>
             </Col>
             <Col>
             <div className=''>
             <input type="text"  id='' className='form-control mt-12' placeholder='Enter your Full Name'/>
             <input type="text"  id='' className='form-control mt-3' placeholder='Enter your Phone N0:'/>
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

export default Landingpage