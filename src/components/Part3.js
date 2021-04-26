import React from 'react'
import {Container,Row,Col} from "react-bootstrap";

import "../components/style.css";


function Part3() {
  return(
    <div className="stats">
      <Container><Row>
    <Col  md={6} className="stats__header">
      <h1 className="mr-5">	The world's biggest
						<br></br>
						healthcare platform </h1>
            <p>
						We work from 7 offices all over the world, bringing Docplanner Group to life in a dozen countries.
					</p>
    <img className="img-par3" src="./images/sygnet.png" rounded/>
    </Col>
    <Col md={6}>
     <Row>
       <Col md={3}><div className="stats__item">
								<div className="vert-align">
									<div>
										<img scr="https://www.docplanner.com/img/flag.png" srcset="https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x"/>
										<h3>Leader in 12 countries</h3>
										<p>
											Poland, Brazil, Mexico, Spain, Italy, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile
										</p>
									</div>
								</div>
							</div></Col>

              <Col md={3}>
              <div className="stats__item stat22">
								<div className="vert-align">
									<div>
										<img scr="https://www.docplanner.com/img/visits.png" srcset="https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x"/>
										<h3>4.8 million appointments</h3>
										<p>
											booked last month
										</p>
									</div>
								</div>
							</div>
              </Col>
     </Row>

     <Row>
      <Col md={3}><div className="stats__item">
								<div className="vert-align">
									<div>
										<img scr="https://www.docplanner.com/img/patients.png" srcset="https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x"/>
										<h3>61.9 mln unique patients</h3>
										<p>
											visit our websites each month
										</p>
									</div>
								</div>
							</div></Col>
              <Col md={3}>


              <div className="stats__item stat22">
								<div classN
                ="vert-align">
									<div>
										<img scr="https://www.docplanner.com/img/doctors.png" srcset="https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x"/>
										<h3>92.5k active doctors</h3>
										<p>
											trust our solutions
										</p>
									</div>
								</div>
							</div>
              </Col>
    </Row>
    

    </Col>
    
  </Row></Container>

        
    </div>
   );

 }

export default Part3