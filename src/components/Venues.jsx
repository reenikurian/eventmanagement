import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Venues() {
  return (
    <>
    <div className = "head-text">
   <div className = "head-image">
     <img src = "https://blog.qceventplanning.com/blog/wp-content/uploads/2022/09/How-to-brand-your-event-planning-business-Feature-Image.jpg" alt = "" height="600px" width="100%" />
   </div>
   <div className="center__texts ms-7">
     <h5  style={{fontSize:"40px "}}> Wedding Venues in Kerala </h5>
     <h7 style={{fontSize:"15px "}}> Kerala, the land of pristine beaches, lush greenery, and serene backwaters, offers enchanting wedding venues. From luxurious resorts to quaint homestays, Kerala has an array of options to create a memorable wedding experience. </h7>
     
     
   </div>
 </div>

  
 <div>
        <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly w-100'>
       <Row>
            <Col>
            <div>
            <h8 className='textstyle 'style={{fontSize:"22px "}}> <span className='text-warning'>Beautiful wedding venues in Kerala are the best way to create fairytales as you tie the knot in God's own country.</span> </h8>
            </div>
             <div>
             <h7 className='textstyle mt-9 me-3' style={{fontSize:"15px "}}>Wedding venues in Kerala boast abundant natural greenery and captivating beauty. These wedding venues offer modern facilities that are on par with venues across India and the world. With stunning surroundings and state-of-the-art amenities, these venues provide the perfect setting for your special day.</h7>
             </div>
              
            </Col>
            <Col>
            <div className=''>
            <img src="https://cdn0.weddingwire.in/vendor/7439/3_2/960/jpeg/viv31295_15_407439-172163898098915.jpeg" alt="" height="400px" width="115%" />
            </div>
            </Col>
       </Row>
  </Container>
   </div>
   <Container>
    <Row>
        <Col>
        <div>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/Seclude-Marari-web-qt2hp6s4jjwxuvvqjg1kditjd3718i5ua4uw15994s.webp" />
      <Card.Body>
        <Card.Title>Heritage Methanam </Card.Title>
        <Card.Text>
        Kasargod
        </Card.Text>
        <Button variant="primary">Request Pricing</Button>
      </Card.Body>
    </Card>
   </div>
        </Col>
        <Col>
        <div>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/Island-D-Cochin-W-qs62p0mtyuf4wywj3yc09nbh35u5flr8h727s34dbw.webp" />
      <Card.Body>
        <Card.Title>Island D Cochin</Card.Title>
        <Card.Text>
         Kochi
        </Card.Text>
        <Button variant="primary">Request Pricing</Button>
      </Card.Body>
    </Card>
   </div>
        </Col>
        <Col>
        <div>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/triver2-qkr7riz11ijgpil283wtp28dnjye2a92x5fahzlwn0.webp" />
      <Card.Body>
        <Card.Title>Trivers Resort</Card.Title>
        <Card.Text>
          Munnar
        </Card.Text>
        <Button variant="primary">Request Pricing</Button>
      </Card.Body>
    </Card>
   </div>
        </Col>
        <Col>
        <div className='mt-4'>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/josh-2-qkkfnjhyu6g8qdmgvybwj6gntgtefjk50ntabvn43g.webp" />
      <Card.Body>
        <Card.Title>Josh Pavilion</Card.Title>
        <Card.Text>
          Thodupuzha
        </Card.Text>
        <Button variant="primary">Request Pricing</Button>
      </Card.Body>
    </Card>
   </div>
        </Col>
        <Col>
        <div className='mt-4'>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/marmara2-qkj1i6tcdj25ojzyvkvvir51rb62fsfoszw7jkgews.webp" />
      <Card.Body>
        <Card.Title>Marmara Beach</Card.Title>
        <Card.Text>
         Kannur
        </Card.Text>
        <Button variant="primary">Request Pricing</Button>
      </Card.Body>
    </Card>
   </div>
        </Col>
        <Col>
        <div className='mt-4'>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/club-6-img2-qkqzxaxj1a74sej37m6ejs30pozxxwuf49vy642av0.webp" />
      <Card.Body>
        <Card.Title>Club 6 Convention Centre</Card.Title>
        <Card.Text>
         Palakkad
        </Card.Text>
        <Button variant="primary">Request Pricing</Button>
      </Card.Body>
    </Card>
   </div>
        </Col>
    </Row>
   </Container>
   </>
  )
}

export default Venues