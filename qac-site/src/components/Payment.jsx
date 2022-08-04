import React from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "./styles/Payment.css"
import Button from "react-bootstrap/Button";

const Payment = () => {
	return (
		<>
			<Container>
				<header>
					<h1>You are almost there, please provide your payment details:</h1>
				</header>
				<Form>
					<Form.Group>
						<Form.Label>First Name:</Form.Label>
						<Form.Control type="text"/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Surname:</Form.Label>
						<Form.Control type="text"/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Email:</Form.Label>
						<Form.Control type="email" placeholder="myemail@example.com"/>
					</Form.Group>
					<Form.Group>
						<Form.Label></Form.Label>
						<Form.Control/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Container>
		</>
	);
}
export default Payment;