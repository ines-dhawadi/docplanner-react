import React from 'react'
import "../components/style.css";
import {Card,Col,Container,Row } from 'react-bootstrap'

const Cardd = (props) => {
  return(
    <div>
<Container>
<Row>
    <Col xs={6} md={4}>
    <Card className="card1" style={{ width: '19rem' }}>
  <Card.Body>
    <Card.Title><img className="" src="https://www.docplanner.com/icons/icon-patients.svg" alt=""/> <br></br> For patients</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
    <Card.Text>
    Find a doctor, book a visit and solve any health-related doubt
    </Card.Text>

    <Card.Link href="#"><select className="selc" data-id="domain-switcher">
								<option>Choose country</option>
																	<option value="http://www.doctoraliar.com">Argentina</option>
																	<option value="http://www.doctoralia.com.br">Brazil</option>
																	<option value="http://www.doctoralia.cl">Chile</option>
																	<option value="http://www.doctoralia.co">Colombia</option>
																	<option value="http://www.znamylekar.cz">Czech</option>
																	<option value="http://www.miodottore.it">Italy</option>
																	<option value="http://www.doctoralia.com.mx">Mexico</option>
																	<option value="http://www.doctoralia.pe">Peru</option>
																	<option value="http://www.znanylekarz.pl">Poland</option>
																	<option value="http://www.doctoralia.com.pt">Portugal</option>
																	<option value="http://www.doctoralia.es">Spain</option>
																	<option value="http://www.doktortakvimi.com">Turkey</option>
															</select></Card.Link>
  </Card.Body>
</Card>
    </Col>
    <Col xs={6} md={4}>
    <Card className="card2" style={{ width: '19rem' }}>
  <Card.Body>
    <Card.Title> <img className="" src="https://www.docplanner.com/icons/icon-doctors.svg" alt=""/> <br></br> For doctors</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
    <Card.Text>
    Save time managing visits and cut no-shows by half
    </Card.Text>
   
    <Card.Link href="#"><select className="selc" data-id="domain-switcher">
								<option>Choose country</option>
																	<option value="http://www.doctoraliar.com">Argentina</option>
																	<option value="http://www.doctoralia.com.br">Brazil</option>
																	<option value="http://www.doctoralia.cl">Chile</option>
																	<option value="http://www.doctoralia.co">Colombia</option>
																	<option value="http://www.znamylekar.cz">Czech</option>
																	<option value="http://www.miodottore.it">Italy</option>
																	<option value="http://www.doctoralia.com.mx">Mexico</option>
																	<option value="http://www.doctoralia.pe">Peru</option>
																	<option value="http://www.znanylekarz.pl">Poland</option>
																	<option value="http://www.doctoralia.com.pt">Portugal</option>
																	<option value="http://www.doctoralia.es">Spain</option>
																	<option value="http://www.doktortakvimi.com">Turkey</option>
															</select></Card.Link>
  </Card.Body>
</Card>
    </Col>
    <Col xs={6} md={4}>
    <Card className="card3" style={{ width: '19rem' }}>
  <Card.Body>
    <Card.Title> <img className="" src="https://www.docplanner.com/icons/icon-clinics.svg" alt=""/> <br></br> For clinics </Card.Title>
    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
    <Card.Text>
    Deliver an exceptional patient experience in your clinic

    </Card.Text>
    
    <Card.Link href="#"><select className="selc" data-id="domain-switcher">
								<option>Choose country</option>
																	<option value="http://www.doctoraliar.com">Argentina</option>
																	<option value="http://www.doctoralia.com.br">Brazil</option>
																	<option value="http://www.doctoralia.cl">Chile</option>
																	<option value="http://www.doctoralia.co">Colombia</option>
																	<option value="http://www.znamylekar.cz">Czech</option>
																	<option value="http://www.miodottore.it">Italy</option>
																	<option value="http://www.doctoralia.com.mx">Mexico</option>
																	<option value="http://www.doctoralia.pe">Peru</option>
																	<option value="http://www.znanylekarz.pl">Poland</option>
																	<option value="http://www.doctoralia.com.pt">Portugal</option>
																	<option value="http://www.doctoralia.es">Spain</option>
																	<option value="http://www.doktortakvimi.com">Turkey</option>
															</select></Card.Link>
  </Card.Body>
</Card>
    </Col>
  </Row>
</Container>




     
    </div>
   )

 }

export default Cardd