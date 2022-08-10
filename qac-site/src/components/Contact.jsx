import React from "react";

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const Contact = () => {
  return (
<Form action="https://formsubmit.co/ridwan_kawsar@hotmail.co.uk" method="POST">
     <input type="text" name="name" required></input>
     <input type="email" name="email" required></input>
     <input type="comment" name="comment" required></input>
     
     <button type="submit">Send</button>

      {/* <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Name" />
        </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>

      <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}/>
      </FloatingLabel>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button> */}
    </Form>
  );
}

export default Contact;