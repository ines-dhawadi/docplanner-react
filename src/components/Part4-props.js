import React from 'react'
import { Card,Button } from "react-bootstrap";

function  Part4Props(props) {
    

  return( props.pays.map(el=>
    <div>


<Card className="mx-4 mb-4" style={{ width: '19rem' }}>
  <Card.Img variant="top" src={el.img} />
  <Card.Body className="d-flex">
    <Card.Title>{el.name}</Card.Title>
    
    <Button className="ml-4 w-75" variant="primary">See openings</Button>
  </Card.Body>
</Card>
    </div>)
   )

 }

export default Part4Props