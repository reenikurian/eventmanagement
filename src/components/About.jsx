import React from 'react'
import { Link } from 'react-router-dom';


function About() {
  return (
    <>
    <div className = "head-text">
   <div className = "head-image">
     <img src = "https://wallpapercave.com/wp/wp10715778.jpg" alt = "" height="600px" width="100%" />
   </div>
   <div className="center__texts ms-7">
     <h5  style={{fontSize:"35px "}}> MELODIA EVENTS </h5>
     <h6 style={{fontSize:"25px "}}>From concept to execution, Kerala’s premier event management company delivers flawless experiences tailored to your unique vision. </h6>
     
   </div>
 </div>

  
 <div>
       
 <div className='d-flex justify-content-center align-items-center '>
 <div footer d-flex align-items-center justify-content-evenly>
    <h2  className='d-flex textstyle mt-4 justify-content-evenly align-items-center mt-3'>Welcome to Melodia Event Management Company</h2>
    <p  className='d-flex textstyle mt-4 justify-content-evenly align-items-center mt-3'>We are an ISO 9001:2015 certified event management company in Kerala with an experience in this field spanning over 15 years. Weddings, events of many kinds, we have created many memories with every approached client of the Malayalee community. Melodia Events has planned over 300 weddings, 70 corporate events, 30+ inaugurations, and 200 other types of private events over the course of a decade and more. Additionally, the company is often referred to interchangeably as Melodia Events and Melodia Event Management by Malayalee clients in Kerala.</p>
   <p  className='d-flex textstyle mt-4 justify-content-evenly align-items-center mt-3'>In 2008, our venture was initiated in Kuriachira, Thrissur. At first, we handled event management tasks mostly in the limited regions close to Thrissur and its surrounds. What started as a small firm has now expanded into a multi-locality event management services in Kerala. Our hard work has enabled us to step out of the neighborhoods of Thrissur to popular territories of Calicut and Cochin. Today, Melodia Events is strongly represented in Thrissur, Calicut, and Kochi – three most dynamic cities of Kerala.</p>
   </div>
   </div>
   </div>
   </>
  )
}

export default About